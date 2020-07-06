import React from 'react';
import caasy from '@caasy/sdk-js';

import BlogPost from '../../components/blogPost/BlogPost';

const Post = (post) => (
    <BlogPost post={post} />
);

export default Post;

export const getStaticProps = async (ctx) => {
    const postId = ctx?.params?.id || '';
    const post = await caasy.posts.getById(postId);
    
    return { props: post };
};

export const getStaticPaths = async () => {
    caasy.init({ siteId: '5f02451de2d2ec5c88de57dc' });
    
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