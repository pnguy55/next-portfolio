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
                    :root{
                        --antic: 'Antic Didone', cursive;
                        --josefin: 'Josefin Sans', sans-serif;
                        --oxygen: 'Oxygen', sans-serif;
                        --main-background: #E0F2D8;
                        --dark: #010440;
                        --light: #545D8C;
                        --dark-text: #010440;
                        --light-text: #545D8C;
                        --body-text: #fffff;
                    }
                    .full-width {
                        width: 100%;
                    }
                    body {
                        font-family: var(--oxygen);
                        color: var(--body-text);
                    } 
                    h1 {
                        font-family: var(--antic);
                        color: var(--light-text);
                    }   
                    h2, h3, h4, h5, h6 {
                        font-family: var(--josefin);
                        color: var(--light-text);
                    }
                `}
                </style>
            </html>
        )
    }
}