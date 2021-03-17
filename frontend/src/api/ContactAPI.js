import { axiosClient } from './axiosClient';

const ContactAPI = {
    getAll() {
        const url = `/contact`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/contact/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/contact`;
        return axiosClient.post(url, product);
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
export default ContactAPI;