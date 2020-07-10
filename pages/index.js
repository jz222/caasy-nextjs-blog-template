import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';
import PageControls from '../components/pageControls/PageControls';

import blogConfig from '../blogConfig';
import utils from '../utils/';

/**
 * Displays all blog posts for a given page number.
 * @param posts {array} all blog posts for the given page
 * @param pageControls {array} contains the pages for the navigation
 * @param currentPage {number} number of the active page
 * @returns {*}
 * @constructor
 */
const Posts = ({ posts, pageControls, currentPage }) => (
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

export default Posts;

/**
 * Fetches all blog posts for the current page
 * number and calculates the navigation.
 * @param ctx
 * @returns {Promise<{props: {pageControls: (*|*[]), currentPage: number, posts: (*|*[])}}>} posts, page controls and page number
 */
export const getStaticProps = async (ctx) => {
    // Usually, it's sufficient to initialize the Caasy SDK once
    // in the entire app. However, when running "next export",
    // this configuration is not persisted and therefore it is
    // necessary to initialize the SDK every time before using it.
    caasy.init(blogConfig.caasySDKConfig);
    
    // Determine the page for which the blog posts should be shown
    const currentPage = +(ctx?.params?.currentPage || '1');
    
    // Fetch all posts for blog posts for the active page from Caasy
    const posts = await caasy.posts.getAll(currentPage);
    
    // Calculate the nnavigation
    const pageControls = utils.getPages(posts.totalItems, posts.itemsPerPage, currentPage) || [];
    
    // Pass the posts, page controls and the active page number to the component
    return { props: { posts: posts.data || [], pageControls, currentPage } };
};