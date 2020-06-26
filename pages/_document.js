import Document, { Head, Main, NextScript } from 'next/document'
const APP_NAME = 'next-pwa example'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'

export default class extends Document {

    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }
    render() {
        return (
            <html lang='en' dir='ltr'>
                <Head>
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#FFFFFF' />
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />

                    <meta name='application-name' content={APP_NAME} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name="keywords" content="marIvon, test" />
                    <meta name="author" content="marIvon" />
                    <meta content="text/html;charset=UTF-8" />

                    <link rel="manifest" href="/manifest.json" />
                    <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
                    <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

