import config from '../../../config.json';

export const email = (): Promise<string> => {
    window.open(`mailto:${config.email}`);

    return Promise.resolve(`Opening mailto:${config.email}...`);
};