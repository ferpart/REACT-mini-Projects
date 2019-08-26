import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cf3bfa498fa9a2c300c2c93b28e18de31a6fbdf17efa86080f44e82147b8c1b5'
    }
});