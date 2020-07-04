import React, { useEffect, useState } from 'react';

import Main from '../layout/main/Main';

import utils from '../../utils/';
import elements from '../elements/index';
import config from '../../config/index';

import styling from './BlogPost.module.scss';

const Post = ({ post }) => {
    const [lastEdit, setLastEdit] = useState('');
    
    useEffect(() => {
        setLastEdit(utils.formatTimestamp(post.updatedAt));
    }, [post.updatedAt]);
    
    return (
        <Main title={post.title[config.locale]}>
            <div className={styling.header} hidden={!post.previewImageUrls}>
                <img
                    src={post?.previewImageUrls?.medium || ''}
                    className={styling.previewImageBackground}
                    alt='preview image background'
                />
            </div>
            
            <article className={styling.elements}>
                <img
                    src={post?.previewImageUrls?.large || ''}
                    className={styling.previewImage}
                    alt='preview image'
                    hidden={!post.previewImageUrls}
                />
                
                <div className={styling.wrapper}>
                    {post?.elements.map(element => {
                        const Element = elements[element.type] || (() => null);
                        return <Element {...element} key={element.id} />;
                    })}
                    
                    <i className={styling.lastEdit}>Last edit: {lastEdit}</i>
                </div>
            
            </article>
        </Main>
    );
};

export default Post;