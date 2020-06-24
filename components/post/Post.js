import React from 'react';

import styling from './Post.module.scss';

const Post = ({ previewImage, title, lastEdit, previewText }) => (
    <article className={styling.post}>
        <div className={styling.header} style={{ backgroundImage: `url("${previewImage}")` }} hidden={!previewImage} />
        
        <div className={styling.content}>
            <h2>{title}</h2>
            
            <span>Last edit: {lastEdit}</span>
            
            <p>{previewText}</p>
        </div>
    </article>
);

export default Post;