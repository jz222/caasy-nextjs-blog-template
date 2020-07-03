import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import formatTimestamp from '../../utils/formatTimestamp';

import config from '../../config/';

import styling from './PostPreview.module.scss';

const PostPreview = ({ id, previewImage, title, lastEdit, previewText }) => {
    const [lastEditDate, setLastEditDate] = useState('');
    
    useEffect(() => {
        setLastEditDate(formatTimestamp(lastEdit));
    }, [lastEdit]);
    
    return (
        <Link href='/post/[id]' as={'/post/' + id}>
            <a className={styling.wrapper}>
                <article className={styling.post}>
                    <div
                        className={styling.header}
                        style={{ backgroundImage: `url("${previewImage}")` }}
                        hidden={!previewImage}
                    />
                    
                    <div className={styling.content}>
                        <h2>{title[config.locale]}</h2>
                        <p>{previewText[config.locale]}</p>
                        <div>Last edit: {lastEditDate}</div>
                    </div>
                </article>
            </a>
        </Link>
    );
};

export default PostPreview;