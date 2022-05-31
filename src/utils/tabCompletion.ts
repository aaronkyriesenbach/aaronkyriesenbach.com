import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: (value: string) => void,
) => {
  const commands = Object.keys(bin).filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
