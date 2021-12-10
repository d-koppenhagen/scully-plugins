import { getTocPlugin } from './scully-plugin-toc';

describe('scullyPluginToc', () => {
  it('should work', () => {
    expect(getTocPlugin()).toEqual('toc');
  });
});
