<div align="center">
  <a href="https://macaw-ui-next.vercel.app/" rel="noopener" target="_blank"><img src="./logo.svg" alt="MacawUI logo"></a></p>

[![npm package](https://img.shields.io/npm/v/@saleor/macaw-ui.svg)](https://www.npmjs.com/package/@saleor/macaw-ui)
[![npm download](https://img.shields.io/npm/dm/@saleor/macaw-ui.svg)](https://www.npmjs.com/package/@saleor/macaw-ui)
[![Bundle Size](https://badgen.net/bundlephobia/minzip/@saleor/macaw-ui)](https://bundlephobia.com/package/@saleor/macaw-ui@latest)

</div>

# MacawUI

Official React UI components kit for [Saleor](https://saleor.io/) — an open-source GraphQL-first and Next.js ready e-commerce platform. You can find most of the elements used in the creation of Saleor's dashboard interface and use it to create Saleor Apps. Have a great time working on your projects and empowering your users. If you have any questions, feel free to let us know on [GitHub Discussions](https://github.com/mirumee/saleor/discussions).

## Installation

```sh
npm i @saleor/macaw-ui
```

## Usage

You need to import the styles into your app. You can do it in your main entry point, for example `index.`tsx`:

```tsx
import "@saleor/macaw-ui/style";
```

Next, you need to add the `ThemeProvider` to your app. It will provide the theme to the components:

```tsx
import { ThemeProvider } from "@saleor/macaw-ui";

const App = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

### Usage with Next.js

If you need to render styles on the server we recommend that you use `getCSSVariables` helper to get the CSS variables that can be injected in `_document.tsx`:

```tsx
import { getCSSVariables } from "@saleor/macaw-ui";
import Document, { Head, Html, Main, NextScript } from "next/document";

const css = getCSSVariables("defaultLight"); // or "defaultDark"

export default class AppDocument extends Document {
  render() {
    return (
      <Html style={css}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### Usage with form libraries

#### React Hook Form

You need to wrap the MacawUI component with [`Controller`](https://react-hook-form.com/api/usecontroller/controller/). For example:

```tsx
import { Input } from "@saleor/macaw-ui";

<Controller
  control={control}
  name="name-input"
  render={({ field }) => <Input {...field} />}
/>;
```

### Usage with Sentry

Add following configuration to `Sentry.Integrations.Breadcrumbs`:

```js
{
  dom: {
    serializeAttribute: ["macaw-ui-component"];
  }
}
```

Right now sentry will display MacawUI components names in breadcrumbs.

### Development

To begin, you need to install dependencies:

```sh
pnpm install
```

Then, you can run the Storybook:

```sh
pnpm dev
```

You can run build in watch mode (useful for real-time development with e.g Dashboard):

```sh
pnpm watch
```

When you finish woking, you can add new changeset

```sh
pnpm change:add
```

### Usefull Chrome extensions

* [Atomic CSS Devtools](https://chromewebstore.google.com/detail/atomic-css-devtools)

## License

Distributed under the Creative Common Attribution 4.0 International License
[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
