import React from 'react';

import blogConfig from '../../../blogConfig';

import styling from './Text.module.scss';

/**
 * Renders a text element.
 * @param headline {object} contains the headline in different languages
 * @param text {object} contains the text in different languages
 * @returns {*}
 * @constructor
 */
const Text = ({headline, text}) => (
    <>
        <h6 hidden={!headline[blogConfig.locale]}>{headline[blogConfig.locale]}</h6>
        <p className={styling.text} hidden={!text[blogConfig.locale]}>{text[blogConfig.locale]}</p>
    </>
);

export default Text;