# scully-plugin-mermaid - The mermaid  `postRenderer`

> Attention! The package 'scully-plugin-mermaid' has been moved into the 'k9n' org. Please update the imports to: '@k9n/scully-plugin-mermaid'. The package: 'scully-plugin-mermaid' won't receive updates in the future.

[![npm](https://img.shields.io/npm/v/scully-plugin-mermaid.svg)](https://www.npmjs.com/package/scully-plugin-mermaid)
[![Dependency Status](https://img.shields.io/librariesio/release/npm/scully-plugin-toc)](https://img.shields.io/librariesio/release/npm/scully-plugin-toc)
[![npm](https://img.shields.io/npm/l/scully-plugin-mermaid.svg)](https://www.npmjs.com/package/scully-plugin-mermaid)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation

To install this library with `npm` run:

```bash
npm i scully-plugin-mermaid mermaid-render -D
```

## Usage

Apply the *postRenderer* plugin via your Scully config file (`scully.<project-name>.config.ts`):

```ts
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
import 'scully-plugin-mermaid';
import { MermaidPluginName, MermaidPluginConfig } from 'scully-plugin-mermaid';

const mermaidOptions: MermaidPluginConfig = {
  /**
   * OPTIONAL: '.language-mermaid' is also the default, so no need to define this
   */
  selector: '.language-mermaid',
  /**
   * OPTIONAL: Define the wrapper element for the SVG
   * When undefined or set to `true`, a `div` with the class `mermaid-svg` is used by default
   * When set to `false`: No wrapper is used (SVG is added directly)
   * When defined as an object, `tagName` is needed to define the type of the wrapper element (HTML tag)
   */
  wrapper: {
    tagName: 'div', // necessary when object is defined
    classNames: ['wrapper', 'mermaid-svg'], // optional
  },
  /**
   * configuration for the mermaid plugin
   * All params as defined here are valid:
   * https://mermaid-js.github.io/mermaid/getting-started/Setup.html#mermaidapi-configuration-defaults
   */
  config: {
    theme: 'dark',
  }
};
setPluginConfig(MermaidPluginName, mermaidOptions);

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-mermaid',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [MermaidPluginName], // apply the postRenderer
      slug: {
        folder: './blog',
      },
    },
  },
};
```

By default, you don't need to add any options. The defaults from Mermaid will be used [as described in the official docs](https://mermaid-js.github.io/mermaid/getting-started/Setup.html#mermaidapi-configuration-defaults).
You can use any of the described mermaid config parameter.

## Example

After running the *postRenderer* it will convert markdown content like the following into SVG graphics:

<pre class="language-text"><code class="language-text">```mermaid
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Some note.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?
```</code></pre>

The above example will result in a graphic like this one:

![rendered mermaid image example](./assets/example.svg)

The resulting SVG is wrapped into an HTML `<div>` element with the class `mermaid-svg` by default.
This can be changed to other elements / classes by adjusting the options.
