import Document, { Head, Html, Main, NextScript } from 'next/document';

import blogConfig from '../blogConfig';

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps };
    }
    
    render() {
        return (
            <Html lang={blogConfig.defaultLanguage}>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;