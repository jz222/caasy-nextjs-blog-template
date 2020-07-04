import React from 'react';
import { FaDev, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import blogConfig from '../../blogConfig';

import styling from './SocialIcons.module.scss';

/**
 * Renders social icons for the available social links.
 * You can edit the link in "blogConfig.js".
 * @returns {*}
 * @constructor
 */
const SocialIcons = () => (
    <div className={styling.social}>
        <a href={blogConfig.social.youtube} target='_blank' rel='noreferrer' hidden={!blogConfig.social.youtube}>
            <FaYoutube />
        </a>
        
        
        <a href={blogConfig.social.linkedin} target='_blank' rel='noreferrer' hidden={!blogConfig.social.linkedin}>
            <FaLinkedin />
        </a>
        
        
        <a href={blogConfig.social.dev} target='_blank' rel='noreferrer' hidden={!blogConfig.social.dev}>
            <FaDev />
        </a>
        
        
        <a href={blogConfig.social.facebook} target='_blank' rel='noreferrer' hidden={!blogConfig.social.facebook}>
            <FaFacebook />
        </a>
        
        
        <a href={blogConfig.social.instagram} target='_blank' rel='noreferrer' hidden={!blogConfig.social.instagram}>
            <FaInstagram />
        </a>
        
        
        <a href={blogConfig.social.twitter} target='_blank' rel='noreferrer' hidden={!blogConfig.social.twitter}>
            <FaTwitter />
        </a>
        
        
        <a href={blogConfig.social.github} target='_blank' rel='noreferrer' hidden={!blogConfig.social.github}>
            <FaGithub />
        </a>
    </div>
);

export default SocialIcons;