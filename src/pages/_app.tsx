import React from 'react';
import '../styles/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground text-xs"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background h-full">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;
