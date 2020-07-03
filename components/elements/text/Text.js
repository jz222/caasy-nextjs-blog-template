import React from 'react';

import config from '../../../config/';

const Text = ({headline, text}) => (
    <>
        <h6 hidden={!headline[config.locale]}>{headline[config.locale]}</h6>
        <p hidden={!text[config.locale]}>{text[config.locale]}</p>
    </>
);

export default Text;