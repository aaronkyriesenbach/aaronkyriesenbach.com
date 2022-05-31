import React from 'react';
import { Entry } from './Entry';

export const useHistory = (defaultValue: Entry[]) => {
  const [history, setHistory] = React.useState<Entry[]>(defaultValue);
  const [command, setCommand] = React.useState<string>('banner');
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
