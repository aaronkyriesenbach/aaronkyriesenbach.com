import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];

  return commands.includes(command);
};
