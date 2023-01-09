<div align="center">
  <a href="https://macaw-ui.vercel.app/" rel="noopener" target="_blank"><img src="/stories/assets/macaw-ui-logo.svg" alt="Material-ui-pickers logo"></a></p>
  
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

Note that this package depends on the following Material-UI **v4** packages: `@material-ui/core`, `@material-ui/icons` and `@material-ui/lab`. If your project doesn't have them installed and you're not using npm v7 with [automatically installed peer dependencies](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/) then you'll need to install them manually:

```sh
npm i @material-ui/core @material-ui/icons @material-ui/lab
```

## Documentation
Take a look at our [storybook docs](https://macaw-ui.vercel.app). You can find guides, component overview, and project ideas there.

### Development

To begin, you need to install dependencies:

```sh
npm install
```

We use [husky](https://www.npmjs.com/package/husky) to provide precommit and prepush git hooks:

```sh
npx husky install
```

To develop our components we utilize [Storybook](https://storybook.js.org/) which is playing very nicely with our development flow. To run storybook's developer server run:

```sh
npm run storybook
```

### Working with Material-UI
MacawUI was created to integrate with [Material-UI](https://material-ui.com/) seamlessly. It exports a `ThemeProvider` that will override Material-UI component styles:
```jsx
import { ThemeProvider } from "@saleor/macaw-ui";

// ...

<ThemeProvider>
  <App />
</ThemeProvider>
```

## License
Distributed under the Creative Common Attribution 4.0 International License
[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
 
