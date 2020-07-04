import caasy from '@caasy/sdk-js';

import Index, { getStaticProps } from './';

export default Index;
export { getStaticProps };

export const getStaticPaths = async () => {
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