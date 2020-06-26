import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';
import Post from '../components/post/Post';

const Home = ({ posts }) => (
    <Main>
        {(posts || []).map(post => (
            <Post key={post.id} title={post.title} previewImage={post?.previewImageUrls?.medium || ''} lastEdit={post.updatedAt} />
        ))}
    </Main>
);

export default Home;

export const getStaticProps = async (ctx) => {
    const currentPage = ctx?.params?.currentPage || '1';
    
    const posts = await caasy.posts.getAll(currentPage);
    
    return { props: { posts: posts.data || [] } };
};