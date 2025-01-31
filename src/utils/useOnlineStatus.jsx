import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [online, setOnline] = useState(true);
    
    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);
    
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

    }, []);
    
    return online;
    }

    export default useOnlineStatus; // Exporting the useOnlineStatus hook as default