> **NOTE**
> As this is a work in progress fork, we are in the works of changing the name of the library to `altea` to avoid confusion with the original `@geist-ui/core` package. This is a community project and is not associated with Vercel.

<p align="center">
<img alt="Codecov" src="https://img.shields.io/codecov/c/github/geist-org/geist-ui?style=for-the-badge&labelColor=000000">
<img alt="CircleCI" src="https://img.shields.io/circleci/build/github/geist-org/geist-ui?style=for-the-badge&labelColor=000000">
<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@geist-ui/core?style=for-the-badge&labelColor=000000">
</p>

> Modern and minimalist React UI library, originating from Vercel's design.

> **NOTE: This is a COMMUNITY PROJECT, [not associated with Vercel](https://github.com/geist-org/geist-ui/issues/635).**

<br/>

## Quick Start

1. run `yarn add @geist-ui/core` or `npm i @geist-ui/core` install it.

2. import into project:

```jsx
import { GeistProvider, CssBaseline } from '@geist-ui/core'

const Application = () => (
  <GeistProvider>
    <CssBaseline /> // ---> Normalize styles
    <AppComponent /> // ---> Your App Component
  </GeistProvider>
)
```

## Documentation

- [Document Site](https://geist-ui.dev)
- [中文文档](https://geist-ui.dev/zh-cn)

## Development

- [Contributing Guide](https://github.com/geist-org/geist-ui/blob/master/.github/CONTRIBUTING.md)

## Showcases

- [Secret](https://secret.gl/)
- [Article view count](https://views-docs.unix.bio/)
- [Tree viewer for CDN](https://cdn.unix.bio/)
- [Better social image](https://img.unix.bio/)
- [SentiNEO: Near-Earth Objects Viewer](https://sentineo.app)
- [Dashboard Design](https://github.com/ofekashery/react-dashboard-design)
- [Regex-Vis: Regex visualizer & editor](https://github.com/Bowen7/regex-vis)
- [Add here](https://github.com/geist-org/geist-ui/issues/new)

## LICENSE

[MIT](./LICENSE)
