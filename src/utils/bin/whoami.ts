import config from '../../../config.json';

export const whoami = (): Promise<string> => {
    return Promise.resolve(`${config.prompt.username}`);
};