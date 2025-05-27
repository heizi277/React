export const testBackendConnection = async () => {
    try {
        const response = await fetch('/api/test');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error testing backend connection:', error);
        throw error;
    }
};
