import { lazy } from "react";

import { hasNoOptions } from "./helpers";
import { NoOptions } from "./NoOptions";

describe("hasNoOptions", () => {
  it("is false without children", () => {
    expect(hasNoOptions(undefined)).toBe(false);
    expect(hasNoOptions(false)).toBe(false);
    expect(hasNoOptions([null, false])).toBe(false);
  });

  it("is true for NoOptions", () => {
    expect(hasNoOptions(<NoOptions>Empty</NoOptions>)).toBe(true);
  });

  it("is true for a lazy child, as passed from a Server Component", () => {
    const LazyNoOptions = lazy(() => Promise.resolve({ default: NoOptions }));

    expect(hasNoOptions(<LazyNoOptions>Empty</LazyNoOptions>)).toBe(true);
  });
});
