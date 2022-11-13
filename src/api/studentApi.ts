import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<Student>> {
        const urlPath = '/students';
        return axiosClient.get(urlPath, {params});
    },

    getById(id: string): Promise<Student> {
        const urlPath = `/students/${id}`;
        return axiosClient.get(urlPath);
    },

    add(student: Student): Promise<Student> {
        const urlPath = '/students';
        return axiosClient.post(urlPath, student);
    },

    update(student: Student): Promise<Student> {
        const urlPath = '/students';
        return axiosClient.patch(urlPath, student);
    },

    remove(id: string): Promise<any> {
        const urlPath = `/students/${id}`;
        return axiosClient.get(urlPath);
    },
}

export default studentApi;