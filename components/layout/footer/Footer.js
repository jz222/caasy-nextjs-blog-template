import React from 'react';

import SocialIcons from '../../socialIcons/SocialIcons'
import Logo from '../../logo/Logo';

import blogConfig from '../../../blogConfig';

import styling from './Footer.module.scss';

/**
 * Renders a column with a title and links. The links can be
 * edited in "blogConfig.js".
 * @param title {string} title of the column
 * @param items {array} contains all the links with label and url
 * @returns {*}
 * @constructor
 */
const Links = ({ title, items }) => (
    <div className={styling.links}>
        <h6>{title}</h6>
        
        <ul>
            {(items || []).map(link => (
                <li key={link.label}>
                    <a href={link.url} target='_blank' rel='noreferrer'>{link.label}</a>
                </li>
            ))}
        </ul>
    </div>
);

/**
 * Renders the blog's footer. The content of the footer can be
 * edited in "blogConfig.js".
 * @returns {*}
 * @constructor
 */
const Footer = () => (
    <footer className={styling.footer}>
        <div className={styling.wrapper}>
            <div className={styling.info}>
                <Logo />
                <p className={styling.description}>{blogConfig.description}</p>
                <SocialIcons />
            </div>
            
            {blogConfig.footer.links.map((links, i) => <Links key={i} {...links} />)}
        </div>
    </footer>
);

export default Footer;