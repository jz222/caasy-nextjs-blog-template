import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js/lib/core';

//Highlight JS languages. Feel free to import them as required
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

import DOMPurify from 'dompurify';
import marked from 'marked';

import blogConfig from '../../../blogConfig';

import styling from './Markdown.module.scss';

// Register Highlight.js languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

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
    // State
    const [parsedMarkdown, setParsedMarkdown] = useState('');
    
    
    // DOM node of the markdown container
    const markdownContainer = useRef({});
    
    
    /**
     * Highlight the parsed markdown every time it changes.
     */
    useEffect(() => {
        if (parsedMarkdown) {
            markdownContainer.current.querySelectorAll('pre code').forEach(block => {
                hljs.highlightBlock(block);
            });
        }
    }, [parsedMarkdown]);
    
    
    /**
     * Parse and sanitize markdown text every time it changes,
     */
    useEffect(() => {
        const html = (marked(text[blogConfig.locale] || ''));
        const sanitized = DOMPurify.sanitize(html);
        
        setParsedMarkdown(sanitized);
    }, [text]);
    
    
    return (
        <div className={styling.markdown}>
            <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} ref={markdownContainer} />
        </div>
    );
};

export default Markdown;