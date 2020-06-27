import Document, { Head, Main, NextScript } from 'next/document'
const APP_NAME = 'next-pwa example'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'

export default class extends Document {

    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }
    render() {
        return (
            <html lang='nl' dir='ltr'>
                <Head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name="keywords" content="marIvon, test" />
                    <meta name="author" content="marIvon" />

                    {/* Android  */}
                    <meta name="theme-color" content="red" />
                    <meta name="mobile-web-app-capable" content="yes" />

                    {/* iOS */}
                    <meta name="apple-mobile-web-app-title" content="Application Title" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />

                    {/* Windows */}
                    <meta name="msapplication-navbutton-color" content="red" />
                    <meta name="msapplication-TileColor" content="red" />
                    <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
                    <meta name="msapplication-config" content="browserconfig.xml" />

                    <title>Test Next PWA</title>

                    {/* Main Link Tags */}
                    <link href="./icons/favicon-16.png" rel="icon" type="image/png" sizes="16x16" />
                    <link href="./icons/favicon-32.png" rel="icon" type="image/png" sizes="32x32" />
                    <link href="./icons/favicon-48.png" rel="icon" type="image/png" sizes="48x48" />
                    <link rel="manifest" href="manifest.json" />

                    {/* iOS */}
                    <link href="./icons/icon-72x72.png" rel="apple-touch-icon" />
                    <link href="./icons/icon-96x96.png" rel="apple-touch-icon" sizes="96x96" />
                    <link href="./icons/icon-128x128.png" rel="apple-touch-icon" sizes="128x128" />
                    <link href="./icons/icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />

                    {/* Startup Image */}
                    <link href="./icons/icon-384x384.png" rel="apple-touch-startup-image" />

                    {/* Android */}
                    <link href="./icons/icon-192x192.png" rel="icon" sizes="192x192" />
                    <link href="./icons/icon-128x128.png" rel="icon" sizes="128x128" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

