import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';
import Author from '../components/author/Author';

import blogConfig from '../blogConfig';

const Authors = ({ authors }) => (
    <Main>
        {(authors || []).map(author => <Author key={author.id} author={author} />)}
    </Main>
);

export const getStaticProps = async () => {
    // Usually, it's sufficient to initialize the Caasy SDK once
    // in the entire app. However, when running "next export",
    // this configuration is not persisted and therefore it is
    // necessary to initialize the SDK every time before using it.
    caasy.init(blogConfig.caasySDKConfig);
    
    // Fetch the first page of authors
    const firstPageOfAuthors = await caasy.posts.getAllAuthors();
    
    // Calculate the total pages of authors to fetch
    const totalPages = Math.ceil((firstPageOfAuthors.total || 0) / firstPageOfAuthors.itemsPerPage);
    
    // Store all authors
    let allAuthors = [...firstPageOfAuthors.data || []];
    
    // Fetch page by page of authors
    for (let i = 2; i <= totalPages; i++) {
        const authors = await caasy.posts.getAllAuthors(2);
        allAuthors = [...allAuthors, ...authors.data || []];
    }
    
    // Store all authors with their latest posts
    const allAuthorsWithPosts = [];
    
    // Fetch the latest posts for each author
    for (let author of allAuthors) {
        const latestPosts = await caasy.posts.getAllByAuthor(author.id);
        author.posts = latestPosts.data || [];
        allAuthorsWithPosts.push(author);
    }
    
    // Pass all authors with their latest posts as props to the component
    return { props: { authors: allAuthorsWithPosts } };
};

export default Authors;