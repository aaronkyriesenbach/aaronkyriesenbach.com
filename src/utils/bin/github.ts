import config from '../../../config.json';

export const github = (): Promise<string> => {
    window.open(`https://github.com/${config.social.github}/`);

    return Promise.resolve('Opening GitHub...');
};