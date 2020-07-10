import React from 'react';

import PostPreview from '../postPreview/PostPreview';

import styling from './Author.module.scss';

const Author = ({ author }) => (
    <>
        <h2>{author.firstName} {author.lastName}</h2>
        
        <div className={styling.posts}>
            {(author.posts || []).map(post => (
                <PostPreview
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    previewText={post.description}
                    previewImage={post?.previewImageUrls?.medium || ''}
                    lastEdit={post.updatedAt}
                    small
                />
            ))}
        </div>
    </>
);

export default Author;