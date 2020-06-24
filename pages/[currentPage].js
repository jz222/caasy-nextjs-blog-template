import Index, { getStaticProps } from './';

export default Index;
export { getStaticProps };

export const getStaticPaths = async () => {
    
    const paths = [{ params: { currentPage: '1' } }, { params: { currentPage: '2' } }];
    
    return {
        fallback: false,
        paths
    };
};