import React, { useEffect } from 'react';
import Prompt from '../Prompt';
import { Entry } from './Entry';

type HistoryProps = {
  history: Entry[],
}

export const History = (props: HistoryProps) => {
  const { history } = props;

  const containerEndRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => containerEndRef.current.scrollIntoView(), [history]);

  return (
    <div>
      {history.map((entry: Entry, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Prompt />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}

      <div ref={containerEndRef} />
    </div>
  );
};

export default History;
