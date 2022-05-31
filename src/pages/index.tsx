import Head from 'next/head';
import React, { useEffect } from 'react';
import config from '../../config.json';
import { History } from '../components/history/History';
import { useHistory } from '../components/history/useHistory';
import { Input } from '../components/input/Input';
import { shell } from '../utils/shell';

type IndexPageProps = {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage = ({ inputRef }: IndexPageProps) => {
  const { history, command, lastCommandIndex, setCommand, setHistory, clearHistory, setLastCommandIndex, } = useHistory([]);

  useEffect(() => { shell({ command: 'banner', setHistory, clearHistory, setCommand }) }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
