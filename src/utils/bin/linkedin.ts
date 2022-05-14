import config from '../../../config.json';

export const linkedin = (): Promise<string> => {
    window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

    return Promise.resolve('Opening LinkedIn...');
};