import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../../components/layout/main/Main';

import elements from '../../components/elements/index';
import config from '../../config/';

import styling from './Post.module.scss';

const Post = (post) => (
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
            </div>
        </article>
    </Main>
);

export default Post;

export const getStaticProps = async (ctx) => {
    const postId = ctx?.params?.id || '';
    const post = await caasy.posts.getById(postId);
    
    return { props: post };
};

export const getStaticPaths = async () => {
    const firstPageOfPosts = await caasy.posts.getAll();
    const totalPages = Math.ceil((firstPageOfPosts.total || 0) / 5);
    
    let allPosts = [...firstPageOfPosts.data];
    
    for (let i = 2; i <= totalPages; i++) {
        const posts = await caasy.posts.getAll(i);
        allPosts = [...allPosts, ...posts.data];
    }
    
    const paths = allPosts.map(post => ({ params: { id: post.id } }));
    
    return {
        fallback: false,
        paths
    };
};