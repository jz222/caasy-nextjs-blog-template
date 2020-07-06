import caasy from '@caasy/sdk-js';

import Index, { getStaticProps } from './';

export default Index;
export { getStaticProps };

export const getStaticPaths = async () => {
    caasy.init({ siteId: '5f02451de2d2ec5c88de57dc' });
    
    const data = await caasy.posts.getAll();
    const totalPages = Math.ceil((data.totalItems || 0) / 5);
    const paths = [];
    
    for (let i = 0; i <= totalPages; i++) {
        paths.push({
            params: {
                currentPage: i.toString()
            }
        });
    }
    
    return {
        fallback: false,
        paths
    };
};