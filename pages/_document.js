import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta name="description" content="Phi Nguyen's programming portfolio" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
                    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Oxygen|Antic+Didone&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style global jsx>
                {`
                    
                `}
                </style>
            </html>
        )
    }
}