import React from 'react';

import Main from '../../components/layout/main/Main';

const Post = ({ title }) => {
    return (
        <Main>
            {title}
        </Main>
    );
};

export default Post;

export const getStaticProps = () => {
    return { props: { title: 'test' } };
};

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [{ params: { id: '1' } }]
    }
};