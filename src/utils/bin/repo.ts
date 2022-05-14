import config from '../../../config.json';

export const repo = (): Promise<string> => {
  window.open(`${config.repo}`);

  return Promise.resolve('Opening Github repository...');
};