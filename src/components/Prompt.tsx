import React from 'react';
import config from '../../config.json';
import useGetMobile from './useGetMobile';

export default function Prompt() {
  const isMobile = useGetMobile();

  return (
    isMobile ?
      <div className="whitespace-nowrap">
        <span className="text-light-gray dark:text-dark-gray">$ ~ </span>
      </div>
      :
      <div className="whitespace-nowrap">
        <span className="text-light-yellow dark:text-dark-yellow">
          {config.prompt.username}
        </span>
        <span className="text-light-gray dark:text-dark-gray">@</span>
        <span className="text-light-green dark:text-dark-green">
          {config.prompt.hostname}
        </span>
        <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
      </div>
  );
};