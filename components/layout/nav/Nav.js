import React from 'react';

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
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    </nav>
);

export default Nav;