import { registerPlugin } from '@scullyio/scully';

import { MermaidPluginName } from './constants';
import { mermaidPlugin } from './mermaid';
import { validator } from './validator';

export { MermaidPluginConfig } from './interfaces';
export { MermaidPluginName } from './constants';

/**
 * register the plugin
 */
registerPlugin(
  'postProcessByHtml',
  MermaidPluginName,
  mermaidPlugin,
  validator
);

export const getMermaidPlugin = () => MermaidPluginName;
