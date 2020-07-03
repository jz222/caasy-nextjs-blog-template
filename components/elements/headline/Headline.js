import React from 'react';

import config from '../../../config/';

const Headline = ({ title, subtitle }) => (
    <>
        <h1>{title[config.locale]}</h1>
        <h3>{subtitle[config.locale]}</h3>
    </>
);

export default Headline;