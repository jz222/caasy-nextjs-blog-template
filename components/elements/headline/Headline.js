import React from 'react';

import blogConfig from '../../../blogConfig';

/**
 * Renders a headline element.
 * @param title {object} contains the title in different languages
 * @param subtitle {object} contains the subtitle in different languages
 * @returns {*}
 * @constructor
 */
const Headline = ({ title, subtitle }) => (
    <>
        <h1>{title[blogConfig.locale]}</h1>
        <h3>{subtitle[blogConfig.locale]}</h3>
    </>
);

export default Headline;