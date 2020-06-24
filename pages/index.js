import React from 'react';

import Main from '../components/layout/main/Main';
import Post from '../components/post/Post';

const Home = () => (
    <Main>
        <Post />
    </Main>
);

export default Home;

export const getStaticProps = async (ctx) => {
  console.log(ctx?.params?.currentPage || 1);
  
  return { props: {} };
};