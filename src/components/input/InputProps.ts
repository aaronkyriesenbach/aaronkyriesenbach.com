import { MutableRefObject } from 'react';
import { Entry } from '../history/Entry';

export type InputProps = {
    inputRef: MutableRefObject<HTMLInputElement>,
    command: string,
    history: Entry[],
    lastCommandIndex: number,
    setCommand: (value: string) => void,
    setHistory: (value: string) => void,
    setLastCommandIndex: (value: number) => void,
    clearHistory: () => void
}