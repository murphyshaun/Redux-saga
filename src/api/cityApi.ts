import { City, ListResponse } from 'models';
import axiosClient from './axiosClient';

const cityApi = {
    getAll(): Promise<ListResponse<City>> {
        const urlPath = '/cities';
        return axiosClient.get(urlPath, 
            {
                params: {
                    _page: 1,
                    _limit: 10,
                },
            });
    },
}

export default cityApi;