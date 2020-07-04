import React from 'react';
import Head from 'next/head';

import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

import blogConfig from '../../../blogConfig';

const Main = ({ title, children }) => (
    <>
        <Head>
            <title>{blogConfig.blogName + ' | ' + (title || blogConfig.defaultTitle)}</title>
        </Head>
        
        <header>
            <Nav />
        </header>
        
        <main>
            {children}
        </main>
        
        <Footer />
    </>
);

export default Main;