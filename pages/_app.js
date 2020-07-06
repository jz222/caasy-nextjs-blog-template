import React from 'react';
import NProgress from 'nprogress';
import caasy from '@caasy/sdk-js';
import Router from 'next/router';

// Import style sheets
import '../stylesheets/global.css';
import '../stylesheets/nprogress.css';

// Blog config
import blogConfig from '../blogConfig';

// Initialize the Caasy SDK. Update the Caasy
// site ID in "blogConfig.js" in the root folder.
caasy.init({ siteId: blogConfig.caasySiteId });

// Loading indicator
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default App;