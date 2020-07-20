import React, { useEffect, useState } from 'react';
import marked from 'marked';

import blogConfig from '../../../blogConfig';

import styling from './Markdown.module.scss';

/**
 * Renders a markdown element as HTML.
 *
 * Caution: The HTML text is sanitized before it is rendered.
 *
 * @param text {string} markdown text
 * @returns {*}
 * @constructor
 */
const Markdown = ({ text }) => {
    const [parsedMarkdown, setParsedMarkdown] = useState('');
    
    useEffect(() => {
        setParsedMarkdown(marked(text[blogConfig.locale] || ''));
    }, [text]);
    
    return (
        <div className={styling.markdown}>
            <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
        </div>
    );
};

export default Markdown;