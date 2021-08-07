import type {AppProps} from 'next/app'
import '../styles/main.scss'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Next App</title>
            </Head>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps}/>
        </>
    )
}
