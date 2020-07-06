import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';
import PageControls from '../components/pageControls/PageControls';

import utils from '../utils/';

const Home = ({ posts, pageControls, currentPage }) => (
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
        
        <PageControls data={pageControls} active={currentPage} />
    </Main>
);

export default Home;

export const getStaticProps = async (ctx) => {
    caasy.init({ siteId: '5f02451de2d2ec5c88de57dc' });
    
    const currentPage = +(ctx?.params?.currentPage || '1');
    const posts = await caasy.posts.getAll(currentPage);
    const pageControls = utils.getPages(posts.totalItems, posts.itemsPerPage, currentPage) || [];
    
    return { props: { posts: posts.data || [], pageControls, currentPage } };
};