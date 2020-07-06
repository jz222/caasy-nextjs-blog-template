import React from 'react';

import styling from './Image.module.scss';

const Image = ({ fileName }) => (
    <img src={'https://storage.googleapis.com/caasy-media-thumbnails/800x800_' + fileName} className={styling.image} alt={fileName} />
);

export default Image;