
import { registerPlugin /*, getPluginConfig*/ } from '@scullyio/scully';
import { TocPluginName } from './constants';
import { tocPlugin } from './toc';
import { validator } from './validator';

export { TocConfig} from './interfaces';
export { TocPluginName} from './constants';

/**
 * register the plugin
 */
registerPlugin('postProcessByHtml', TocPluginName, tocPlugin, validator);
export const getTocPlugin = () => TocPluginName;
