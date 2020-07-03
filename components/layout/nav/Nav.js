import React from 'react';
import Link from 'next/link';

import styling from './Nav.module.scss';

const Nav = () => (
    <nav className={styling.nav}>
        <div className={styling.container}>
            <Link href='/'>
                <div className={styling.logo}>my<b> | BLOG</b></div>
            </Link>
    
            <ul className={styling.menu}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </nav>
);

export default Nav;