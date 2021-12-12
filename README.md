

# Scully Plugins

<img width="300" alt="Scully Logo" src="https://raw.githubusercontent.com/scullyio/scully/main/assets/logos/SVG/Green/scullyio-logo-green.svg">

This workspace contains a collection of plugins for the [SSG Scully](https://scully.io/) listed below.

## Available Plugins

| Plugin Name                                                   | Run Tests                        | Release & Publish Plugin Version        |
| ------------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| [scully-plugin-mermaid](scully/plugins/scully-plugin-mermaid) | `npm test scully-plugin-mermaid` | `npm run release:scully-plugin-mermaid` |
| [scully-plugin-toc](scully/plugins/scully-plugin-toc)         | `npm test scully-plugin-toc`     | `npm run release:scully-plugin-toc`     |


## Demo

All listed plugins are integrated in the Angular Demo app for integration testing and playing around with them.
You can build and run the demo app as follows:

```bash
npm run build
npm run scully
npm run scully:serve # or cd dist/static && npx http-server
```

## Nx workspace

This project was generated using [Nx](https://nx.dev).

<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="300">
