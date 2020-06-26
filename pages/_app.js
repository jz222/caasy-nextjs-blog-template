import React from 'react';
import caasy from '@caasy/sdk-js';

import '../stylesheets/global.css';

caasy.init({ mode: 'dev', siteId: '5ee4debb36189554686eb89b'});

const App = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default App;