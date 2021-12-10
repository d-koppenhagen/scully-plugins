import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: "./apps/scully-plugin-demo/src",
  projectName: "scully-plugin-demo",
  outDir: './dist/static',
  routes: {
  }
};