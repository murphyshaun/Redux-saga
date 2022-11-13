import axiosClient from './axiosClient';

const cityApi = {
    getAll() {
        const urlPath = '/cities';
        return axiosClient.get(urlPath);
    }
}

export default cityApi;