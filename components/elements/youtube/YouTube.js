import React from 'react';

import styling from './YouTube.module.scss';

/**
 * Renders a YouTube element.
 * @param videoId {string} the ID of the YouTube video
 * @returns {*}
 * @constructor
 */
const YouTube = ({ videoId }) => (
    <div className={styling.youtube}>
        <iframe src={'https://www.youtube.com/embed/' + videoId} title='embedded YouTube video' />
    </div>
);

export default YouTube;