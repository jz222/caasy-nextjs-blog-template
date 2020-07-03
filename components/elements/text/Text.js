import React from 'react';

import config from '../../../config/';

import styling from './Text.module.scss';

const Text = ({headline, text}) => (
    <>
        <h6 hidden={!headline[config.locale]}>{headline[config.locale]}</h6>
        <p className={styling.text} hidden={!text[config.locale]}>{text[config.locale]}</p>
    </>
);

export default Text;