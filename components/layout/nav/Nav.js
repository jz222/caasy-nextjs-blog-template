import React from 'react';

import styling from './Nav.module.scss';

const Nav = () => (
    <nav className={styling.nav}>
        <div className={styling.container}>
            <div>my<b> | BLOG</b></div>
    
            <ul className={styling.menu}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </nav>
);

export default Nav;