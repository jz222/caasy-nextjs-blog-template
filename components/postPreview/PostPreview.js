import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import utils from '../../utils/';
import blogConfig from '../../blogConfig';

import styling from './PostPreview.module.scss';

const PostPreview = ({ id, previewImage, title, lastEdit, previewText, small }) => {
    const [lastEditDate, setLastEditDate] = useState('');
    
    useEffect(() => {
        setLastEditDate(utils.formatTimestamp(lastEdit));
    }, [lastEdit]);
    
    return (
        <div className={small ? styling.wrapperSmall : styling.wrapper}>
            <Link href='/post/[id]' as={'/post/' + id}>
                <article className={styling.post}>
                    <div
                        className={styling.header}
                        style={{ backgroundImage: `url("${previewImage}")` }}
                        hidden={!previewImage}
                    />
                    
                    <div className={styling.content}>
                        <h2>
                            <Link href='/post/[id]' as={'/post/' + id}>
                                <a>{title?.[blogConfig.locale]}</a>
                            </Link>
                        </h2>
                        
                        <p>{previewText?.[blogConfig.locale]}</p>
                        <div>Last edit: {lastEditDate}</div>
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default PostPreview;