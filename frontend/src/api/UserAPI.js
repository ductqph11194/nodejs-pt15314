import { axiosClient } from './axiosClient';

const UserAPI = {
    getAll() {
        const url = `/dangki`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/dangki/${id}`;
        return axiosClient.get(url);
    },
    add(dangki) {
        const url = `/dangki`;
        return axiosClient.post(url, dangki);
    },
    remove(id) {
        const url = `contact/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/contact/${id}`;
        return axiosClient.put(url, data);
    }
}
export default UserAPI;