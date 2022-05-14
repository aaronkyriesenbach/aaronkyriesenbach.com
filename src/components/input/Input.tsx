import React from 'react';
import { commandExists } from '../../utils/commandExists';
import { shell } from '../../utils/shell';
import { handleTabCompletion } from '../../utils/tabCompletion';
import { Ps1 } from '../Ps1';
import { InputProps } from './InputProps';

export const Input = ({
  inputRef,
  containerEndRef,
  command,
  history,
  lastCommandIndex,
  setCommand,
  setHistory,
  setLastCommandIndex,
  clearHistory,
}: InputProps) => {
  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map(({ command }) => command)
      .filter((command: string) => command);

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
      shell(command, setHistory, clearHistory, setCommand).then(() => containerEndRef.current.scrollIntoView());
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
    <div className="flex flex-row space-x-2" ref={containerEndRef}>
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-light-background dark:bg-dark-background focus:outline-none flex-grow ${commandExists(command) || command === ''
          ? 'text-dark-green'
          : 'text-dark-red'
          }`}
        value={command}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;