import { MutableRefObject } from 'react';
import { History } from '../history/interface'

export type InputProps = {
    inputRef: MutableRefObject<HTMLInputElement>,
    containerRef: MutableRefObject<HTMLDivElement>,
    command: string,
    history: History[],
    lastCommandIndex: number,
    setCommand: React.Dispatch<React.SetStateAction<string>>,
    setHistory: (value: string) => void,
    setLastCommandIndex: React.Dispatch<React.SetStateAction<number>>,
    clearHistory: () => void
}