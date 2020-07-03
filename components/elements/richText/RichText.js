import React from 'react';

import config from '../../../config/';

const RichText = ({ text }) => (
    <div dangerouslySetInnerHTML={{ __html: text[config.locale] }} />
);

export default RichText;