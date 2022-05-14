import * as bin from './bin';

type ShellProps = {
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: (value: string) => void
}

export const shell = (props: ShellProps): Promise<string> => {
  const { command, setHistory, clearHistory, setCommand } = props;

  const args = command.split(' ');
  args[0] = args[0].toLowerCase();
  var result: Promise<string> = Promise.resolve(undefined);

  if (args[0] === 'clear') {
    clearHistory();
  } else {
    if (command === '') {
      setHistory('');
    } else if (Object.keys(bin).indexOf(args[0]) === -1) {
      setHistory(`shell: command not found: ${args[0]}. Try 'help' to get started.`);
    } else {
      result = bin[args[0]](args.slice(1)).then(resp => setHistory(resp));
    }
  }

  setCommand('');
  return result;
};
