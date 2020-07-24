import React from 'react';

import styling from './Image.module.scss';

/**
 * Renders an image element.
 * @param imageUrls {object} image URL of all available sizes
 * @param imageName {string} name of the image.
 * @returns {*}
 * @constructor
 */
const Image = ({ imageUrls, imageName }) => (
    <img src={imageUrls.medium} className={styling.image} alt={imageName} />
);

export default Image;