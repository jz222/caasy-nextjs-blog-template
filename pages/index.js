import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';

const Home = ({ posts }) => (
    <Main>
        {(posts || []).map(post => (
            <PostPreview
                key={post.id}
                id={post.id}
                title={post.title}
                previewText={post.description}
                previewImage={post?.previewImageUrls?.medium || ''}
                lastEdit={post.updatedAt}
            />
        ))}
    </Main>
);

export default Home;

export const getStaticProps = async (ctx) => {
    const currentPage = ctx?.params?.currentPage || '1';
    const posts = await caasy.posts.getAll(currentPage);
    
    return { props: { posts: posts.data || [] } };
};