export const echo = (args: string[]): Promise<string> => {
    return Promise.resolve(args.join(' '));
};