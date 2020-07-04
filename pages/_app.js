import React from 'react';
import NProgress from 'nprogress';
import caasy from '@caasy/sdk-js';
import Router from 'next/router';

// Import style sheets
import '../stylesheets/global.css';
import '../stylesheets/nprogress.css';

// Initialize the Caasy SDK
caasy.init({ mode: 'dev', siteId: '5ee4debb36189554686eb89b' });

// Loading indicator
Router.events.on('routeChangeStart', NProgress.start);
Router.events.on('routeChangeComplete', NProgress.done);
Router.events.on('routeChangeError', NProgress.done);

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default App;