import React, { MutableRefObject } from 'react';
import { Ps1 } from '../Ps1';
import { Entry } from './Entry';

type HistoryProps = {
  history: Entry[],
  containerEndRef: MutableRefObject<HTMLDivElement>
}

export const History = (props: HistoryProps) => {
  const { history, containerEndRef } = props;

  return (
    <div>
      {history.map((entry: Entry, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
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
