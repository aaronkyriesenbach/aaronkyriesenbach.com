import 'bootstrap/dist/css/bootstrap.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import './global.scss';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <div>
            <Head>
                <title>Aaron Ky-Riesenbach</title>
                <meta name="description" content="Personal website of Aaron Ky-Riesenbach" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}