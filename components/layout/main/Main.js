import React from 'react';
import Head from 'next/head';

import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

import blogConfig from '../../../blogConfig';

/**
 * Renders the blog's layout. Every page should
 * be wrapped with this component.
 * @param title {string} title of the site
 * @param children {jsx} the actual content of the site
 * @returns {*}
 * @constructor
 */
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