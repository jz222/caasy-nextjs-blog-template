import React from 'react';
import Link from 'next/link';

import Logo from '../../logo/Logo';

import styling from './Nav.module.scss';

/**
 * Renders the navigation bar.
 * @returns {*}
 * @constructor
 */
const Nav = () => (
    <nav className={styling.nav}>
        <div className={styling.container}>
            <Logo />
            
            <ul className={styling.menu}>
                <li>
                    <Link href='/'>
                        <a>Posts</a>
                    </Link>
                </li>
                
                <li>
                    <Link href='/authors'>
                        <a>Authors</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;