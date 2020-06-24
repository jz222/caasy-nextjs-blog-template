import React from 'react';
import Head from 'next/head';

import Nav from '../nav/Nav';

import config from '../../../config';

const Main = ({ title, children }) => (
    <>
        <Head>
            <title>{title || config.defaultTitle}</title>
        </Head>
        
        <header>
            <Nav />
        </header>
        
        <main>
            {children}
        </main>
        
        <footer></footer>
    </>
);

export default Main;