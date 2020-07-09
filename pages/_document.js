import Document, { Head, Html, Main, NextScript } from 'next/document';

import blogConfig from '../blogConfig';

/**
 * Defines the document. It is used to set the blog's
 * language to the HTML element.
 */
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