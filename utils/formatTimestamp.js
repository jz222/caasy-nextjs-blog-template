const formatTimestamp = (timestamp) => {
    try {
        const date = new Date(timestamp);
        
        const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        return date.toLocaleDateString(navigator.language, opts);
        
    } catch (error) {
        return '';
    }
};

export default formatTimestamp;