import React from 'react';
import caasy from '@caasy/sdk-js';

import Main from '../components/layout/main/Main';

import blogConfig from '../blogConfig';

const Authors = ({ authors }) => (
    <Main>
        <h1>Authors</h1>
    </Main>
);

export const getStaticProps = async () => {
    // Usually, it's sufficient to initialize the Caasy SDK once
    // in the entire app. However, when running "next export",
    // this configuration is not persisted and therefore it is
    // necessary to initialize the SDK every time before using it.
    caasy.init(blogConfig.caasySDKConfig);
    
    const firstPageOfAuthors = await caasy.posts.getAllAuthors();
    
    const totalPages = Math.ceil((firstPageOfAuthors.total || 0) / firstPageOfAuthors.itemsPerPage);
    
    let allAuthors = [...firstPageOfAuthors.data];
    
    for (let i = 2; i <= totalPages; i++) {
        const authors = await caasy.posts.getAllAuthors(2);
        allAuthors = [...allAuthors, ...authors.date];
    }
    
    return { props: { authors: allAuthors } };
};

export default Authors;