import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import caasy from '@caasy/sdk-js';
import Router from 'next/router';

// Blog config
import blogConfig from '../blogConfig';

// Import style sheets
import '../stylesheets/global.css';
import '../stylesheets/nprogress.css';
import '../stylesheets/nightOwl.css';

// Initialize the Caasy SDK. Update the Caasy
// site ID in "blogConfig.js" in the root folder.
caasy.init(blogConfig.caasySDKConfig);

// Loading indicator
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

/**
 * The component ensures that every site has title and meta element
 * in the header. Additional meta tags can be added below. Make sure
 * to add them als children of the Head component.
 * @param Component {jsx} the component that is currently display
 * @param pageProps {object} the currently active element's props
 * @returns {*}
 * @constructor
 */
const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title key='title'>{blogConfig.blogName || ''}</title>
            <meta key='description' name='description' content={blogConfig.description} />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;