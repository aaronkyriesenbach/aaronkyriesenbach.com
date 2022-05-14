import config from '../../../config.json';

export const about = (): Promise<string> => {
  return Promise.resolve(`Hey, I'm ${config.name.split(' ')[0]}! I'm a student at Northeastern University studying Computer Engineering and Music Technology.
I'm a coxswain on the varsity rowing team, and in my free time I enjoy playing the violin, reading (try running 'books'!), listening to music,
brewing coffee, and playing chess.

(run 'help' to see all commands)`);
};