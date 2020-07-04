const getPages = (totalItems, itemsPerPage, currentPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages < 5) {
        return Array.from(Array(totalPages), (_, i) => i + 1);
    }
    
    if (currentPage === 1) {
        return [1, 2, 3, '...', totalPages];
    }
    
    if (currentPage === totalPages - 1 || currentPage === totalPages - 2 || currentPage === totalPages) {
        return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    
    if (currentPage === 2 || currentPage === 3) {
        return [1, 2, 3, '...', totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
};

export default getPages;