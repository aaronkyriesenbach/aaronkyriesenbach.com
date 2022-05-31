import React from 'react';
import { commandExists } from '../../utils/commandExists';
import { shell } from '../../utils/shell';
import { handleTabCompletion } from '../../utils/tabCompletion';
import { Entry } from '../history/Entry';
import Prompt from '../Prompt';
import { InputProps } from './InputProps';

export const Input = (props: InputProps) => {
  const { inputRef, command, history, lastCommandIndex, setCommand, setHistory, setLastCommandIndex, clearHistory } = props;

  const onSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history.map((entry: Entry) => entry.command);

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setCommand('');
      setHistory('');
      setLastCommandIndex(0);
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(command, setCommand);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      shell({ command, setHistory, clearHistory, setCommand });
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index: number = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setCommand(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setCommand('');
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(value);
  };

  return (
    <div className="flex flex-row space-x-2">
      <Prompt />

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-light-background dark:bg-dark-background focus:outline-none w-full text-dark-${commandExists(command) || command === ''
            ? 'green'
            : 'red'
          }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
};

export default Input;
