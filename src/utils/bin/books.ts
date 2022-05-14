import config from '../../../config.json';

export const books = (): Promise<string> => {
  return Promise.resolve(`Last read: ${config.books.last}
Currently reading: ${config.books.current}`);
};