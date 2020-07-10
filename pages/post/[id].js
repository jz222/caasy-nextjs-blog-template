import React from 'react';
import caasy from '@caasy/sdk-js';

import BlogPost from '../../components/blogPost/BlogPost';

import blogConfig from '../../blogConfig';

/**
 * Renders the blog post for the given data.
 * @param post
 * @returns {*}
 * @constructor
 */
const Post = (post) => <BlogPost post={post} />;

export default Post;

/**
 * Loads the blog post from Caasy.
 * @param ctx {object} context that contains the ID of the blog post that should be loaded
 * @returns {Promise<{props: *}>}
 */
export const getStaticProps = async (ctx) => {
    // Determine the ID of the blog post
    const postId = ctx.params.id;
    
    // Fetch the blog post from Caasy
    const post = await caasy.posts.getById(postId);
    
    // Pass the post data to the component
    return { props: post };
};


/**
 * Determines all the paths for the blog posts.
 * @returns {Promise<{paths: {params: {id: *}}[], fallback: boolean}>}
 */
export const getStaticPaths = async () => {
    // Usually, it's sufficient to initialize the Caasy SDK once
    // in the entire app. However, when running "next export",
    // this configuration is not persisted and therefore it is
    // necessary to initialize the SDK every time before using it.
    caasy.init(blogConfig.caasySDKConfig);
    
    // Fetch all blog post IDs
    const allBlogPostIds = await caasy.posts.getAllIds();
    
    // Get all IDs
    const paths = allBlogPostIds.map(id => ({ params: { id } }));
    
    return {
        fallback: false,
        paths
    };
};