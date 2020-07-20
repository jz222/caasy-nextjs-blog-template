import React, { useEffect, useState } from 'react';

import Main from '../layout/main/Main';

import utils from '../../utils/';
import elements from '../elements/index';
import blogConfig from '../../blogConfig';

import styling from './BlogPost.module.scss';

/**
 * Renders a blog post. It dynamically determines the all the elements
 * and renders their corresponding components.
 * @param post {object} data of the blog post
 * @returns {*}
 * @constructor
 */
const Post = ({ post }) => {
    // State
    const [lastEdit, setLastEdit] = useState('');
    
    /**
     * Formats the timestamp to the visitors format.
     */
    useEffect(() => {
        setLastEdit(utils.formatTimestamp(post.updatedAt));
    }, [post.updatedAt]);
    
    return (
        <Main title={post.title[blogConfig.locale]}>
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
                    {(post?.elements || []).map(element => {
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