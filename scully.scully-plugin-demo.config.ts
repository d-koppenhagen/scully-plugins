import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';
// import './scully/plugins/plugin';
import './scully/plugins/scully-plugin-toc';
import {
  TocConfig,
  TocPluginName,
} from './scully/plugins/scully-plugin-toc';

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

export const config: ScullyConfig = {
  projectRoot: "./apps/scully-plugin-demo/src",
  projectName: "scully-plugin-demo",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: [TocPluginName],
      slug: {
        folder: "./blog"
      }
    },
  }
};
