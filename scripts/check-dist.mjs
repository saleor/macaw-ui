// Checks the module graph of the built package. Run after `vite build`.
import { readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const clientOnlyApi =
  /\b(createContext|useState|useEffect|useLayoutEffect|useInsertionEffect|useRef|useContext|useReducer|useImperativeHandle|useSyncExternalStore|useTransition|useDeferredValue|useOptimistic|useActionState)\b/;
const relativeImport = /(?:from|import|require\()\s*["'](\.[^"']+)["']/g;

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const entries = [pkg.main, pkg.exports["."].import, pkg.exports["."].default];
const errors = [];

const modules = new Map();
const load = (file) => {
  if (!modules.has(file)) {
    const code = readFileSync(file, "utf8");
    const imports = [...code.matchAll(relativeImport)].map(([, specifier]) =>
      join(dirname(file), specifier)
    );

    modules.set(file, { code, imports });
  }

  return modules.get(file);
};

// 1. Walk what a React Server Component evaluates when it imports the package, stopping at "use client" modules
// (the bundler swaps those for client references). None of these server modules may use a React API that doesn't
// exist on the server, e.g. "createContext is not a function" at import time.
// A Set iterates over values added during iteration, so this is a breadth-first walk.
const serverModules = new Set(entries.map(normalize));

for (const file of serverModules) {
  const { code, imports } = load(file);

  if (code.startsWith('"use client";')) continue;

  const api = code.match(clientOnlyApi)?.[0];

  if (api)
    errors.push(`${file} uses ${api} but doesn't start with "use client"`);

  imports.forEach((imported) => serverModules.add(imported));
}

// 2. No import cycles. Bundlers that evaluate one module at a time (e.g. Next.js dev) can then read an export
// before its module has run: "ReferenceError: Cannot access 'x' before initialization".
const done = new Set();
const visit = (file, path) => {
  if (path.includes(file)) {
    errors.push(
      `Import cycle: ${[...path.slice(path.indexOf(file)), file].join(" -> ")}`
    );

    return;
  }

  if (done.has(file)) return;

  load(file).imports.forEach((imported) => visit(imported, [...path, file]));
  done.add(file);
};

entries.map(normalize).forEach((entry) => visit(entry, []));

// 3. Global styles made it into the stylesheet. Files that only call globalStyle/globalFontFace export nothing,
// so tree-shaking drops them (and their CSS) if they're treated as side-effect free.
const css = readFileSync(pkg.exports["./style"].default, "utf8");

if (!css.includes("@font-face"))
  errors.push("style.css has no @font-face rules (fonts.css.ts was dropped)");
if (!/(^|[},])html[{,]/.test(css))
  errors.push("style.css has no html rule (global.css.ts was dropped)");

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}
