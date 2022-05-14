import config from '../../../config.json';

export const resume = (): Promise<string> => {
  window.open(`${config.resume_url}`);

  return Promise.resolve('Opening resume...');
};