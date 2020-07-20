import React from 'react';

import styling from './Image.module.scss';

/**
 * Renders an image element.
 * @param fileName {string} name of the image.
 * @returns {*}
 * @constructor
 */
const Image = ({ fileName }) => (
    <img src={'https://storage.googleapis.com/caasy-media-thumbnails/800x800_' + fileName} className={styling.image} alt={fileName} />
);

export default Image;