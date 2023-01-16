import config from '../../../config.json';

export const about = (): Promise<string> => {
  return Promise.resolve(`Hey, I'm ${config.name.split(' ')[0]}! I'm a student at Northeastern University studying Computer Engineering with a minor in Music. I'm a rock climber and very active in the outdoors club, and in my free time I enjoy playing the violin and piano, reading (try running 'books'!), listening to music, brewing coffee, and playing chess.

(run 'help' to see all commands)`);
};
