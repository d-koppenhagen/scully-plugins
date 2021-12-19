import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
import '@k9n/scully-plugin-toc';
import { TocConfig, TocPluginName } from '@k9n/scully-plugin-toc';
import '@k9n/scully-plugin-mermaid';
import {
  MermaidPluginConfig,
  MermaidPluginName,
} from '@k9n/scully-plugin-mermaid';
/**
 * configuration for the TOC plugin
 */
const tocOptions: TocConfig = {
  blogAreaSelector: '.blog-content',
  insertSelector: '#toc',
  level: ['h2', 'h3', 'h4'],
  trailingSlash: true,
  scrollIntoViewOnClick: true,
};
setPluginConfig(TocPluginName, tocOptions);

/**
 * configuration for the mermaid plugin
 */
const mermaidOptions: MermaidPluginConfig = {
  config: { theme: 'dark' },
  wrapper: {
    tagName: 'div',
    classNames: ['wrapper', 'mermaid-image'],
  },
};
setPluginConfig(MermaidPluginName, mermaidOptions);

export const config: ScullyConfig = {
  projectRoot: './apps/scully-plugin-demo/src',
  projectName: 'scully-plugin-demo',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [TocPluginName, MermaidPluginName],
      slug: {
        folder: './blog',
      },
    },
  },
};
