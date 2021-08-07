import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="keywords" content="next,js,javascript,typescript"/>
                    <meta name="description" content="Next tutorial from YouTube | VladilenMinin"/>
                    <meta name="charSet" content="utf-8"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
