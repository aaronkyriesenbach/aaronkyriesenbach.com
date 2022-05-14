export const date = (): Promise<string> => {
    return Promise.resolve(new Date().toString());
};