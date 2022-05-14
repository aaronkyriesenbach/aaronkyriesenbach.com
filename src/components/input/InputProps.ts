import { MutableRefObject } from 'react';
import { Entry } from '../history/Entry';

export type InputProps = {
    inputRef: MutableRefObject<HTMLInputElement>,
    command: string,
    history: Entry[],
    lastCommandIndex: number,
    setCommand: React.Dispatch<React.SetStateAction<string>>,
    setHistory: (value: string) => void,
    setLastCommandIndex: React.Dispatch<React.SetStateAction<number>>,
    clearHistory: () => void
}