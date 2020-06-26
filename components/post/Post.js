import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import formatTimestamp from '../../utils/formatTimestamp';

import styling from './Post.module.scss';

const Post = ({ id, previewImage, title, lastEdit, previewText }) => {
    const [lastEditDate, setLastEditDate] = useState('');
    
    useEffect(() => {
        setLastEditDate(formatTimestamp(lastEdit));
    }, [lastEdit]);
    
    return (
        <Link href='/post/[id]' as={'/post/' + id}>
            <a className={styling.wrapper}>
                <article className={styling.post}>
                    <div className={styling.header} style={{ backgroundImage: `url("${previewImage}")` }}
                         hidden={!previewImage} />
                    
                    <div className={styling.content}>
                        <h2>{title}</h2>
                        
                        <div>Last edit: {lastEditDate}</div>
                        
                        <p>{previewText}</p>
                    </div>
                </article>
            </a>
        </Link>
    );
};

export default Post;