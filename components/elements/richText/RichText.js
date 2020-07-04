import React from 'react';

import config from '../../../config/';

import styling from './RichText.module.scss';

const RichText = ({ text }) => (
    <div className={styling.richText} dangerouslySetInnerHTML={{ __html: text[config.locale] }} />
);

export default RichText;