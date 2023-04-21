<div align="center">
  <a href="https://macaw-ui-next-j3ozyx4th-saleorcommerce.vercel.app/" rel="noopener" target="_blank"><img src="/legacy/stories/assets/macaw-ui-logo.svg" alt="Material-ui-pickers logo"></a></p>
  
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

Note that this package still bundles old version of MacawUI so it still depends on the following Material-UI v4 packages: @material-ui/core, @material-ui/icons and @material-ui/lab. If your project doesn't have them installed and you're not using npm v7 with [automatically installed peer dependencies](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/) then you'll need to install them manually:

```sh
npm i @material-ui/core @material-ui/icons @material-ui/lab
```

## Usage

You need to import the styles in your app. You can do it in your main entry point, for example `index.tsx`:

```tsx
import "@saleor/macaw-ui/next/style";
```

Next, you need to add the `ThemeProvider` to your app. It will provide the theme to the components:

```tsx
import { ThemeProvider } from "@saleor/macaw-ui/next";

const App = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

### Usage with Next.js

As mentioned above, we still bundle old version of MacawUI so you need to add the following to your `next.config.js`:

```js
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    esmExternals: false,
  },
};
```

It tells Next.js not to use ESM exports for external modules. This is needed because MacawUI dependencies (Material-UI v4) are still using CommonJS exports.

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

## License

Distributed under the Creative Common Attribution 4.0 International License
[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
