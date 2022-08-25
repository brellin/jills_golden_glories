import Cookies from 'js-cookie';
import axios from './axios';
import router from '../routes';

function makeFormData(pupData) {
    const fd = new FormData();
    Object.entries(pupData).forEach(n => {
        if (typeof v !== Array) fd.set(n[ 0 ], n[ 1 ]);
        else n[ 1 ].forEach(pic => fd.append(n[ 0 ], pic));
    });
    // fd.set('title', pupData.title); pupData.pictures.forEach(pic => fd.append('pictures', pic)); fd.set('sold', pupData.sold); return fd;
    return fd;
}

export default {
    async pupulate({ commit }) {
        const { data } = await axios.get('puppies');
        commit('pupulate', data);
    },
    async login({ commit }, { username, password }) {
        try {
            const { data: { token } } = await axios.create({ headers: { username, password, secret: process.env.VUE_APP_SECRET } }).post('users/login');
            Cookies.set('token', token);
            commit('login');
            router.push('/puppyManager');
        } catch (err) { console.error(err); }
    },
    async checkLogin({ commit }) {
        try {
            await axios.post('users/login');
            commit('login');
        } catch (err) { console.error(err); }
    },
    async deletePup({ commit }, id) {
        try {
            await axios.delete(`puppies/${ id }`);
            commit('deletePup', id);
        } catch (err) { console.error(err); }
    },
    async deletePic({ commit }, { id, public_id }) {
        try {
            await axios.put(`puppies/picture/${ id }`, { public_id });
            commit('deletePic', { id, public_id });
        } catch (err) { console.error(err); }
    },
    async addPup({ commit }, newPuppy) {
        const fd = makeFormData({ ...newPuppy, sold: false });

        try {
            const { data } = await axios.post('puppies', fd, {
                headers: { 'content-type': 'multipart/form-data' }
            });
            commit('addPup', data);
        } catch ({ message }) { console.error(message); }
    },
    async editPup({ commit }, { id, edits }) {
        const fd = makeFormData(edits);

        try {
            const { data } = await axios.put(`puppies/${ id }`, fd, {
                headers: { 'content-type': 'multipart/form-data' }
            });
            console.log(data);
            commit('editPup', { id, edits: data });
        } catch (err) { console.error(err); }
    },
    async bloodulate({ commit }) {
        const { data } = await axios.get('bloodlines');
        commit('bloodulate', data);
    },
    async addBl({ commit }, newBl) {
        const fd = makeFormData(newBl);

        try {
            const { data } = await axios.post('bloodlines/new', fd, {
                headers: { 'content-type': 'multipart/form-data' }
            });
            commit('addBl', data);
        } catch (err) { console.error(err); }
    },
    async editBl({ commit }, { id, bl }) {
        const fd = makeFormData(bl);

        try {
            const { data } = await axios.put(`bloodlines/${ id }`, fd, {
                headers: { 'content-type': 'multipart/form-data' }
            });
            console.log(data);
            commit('editBl', { id, edits: data });
        } catch (err) { console.error(err); }
    },
    async deleteBl({ commit }, id) {
        try {
            await axios.delete(`bloodlines/${ id }`);
            commit('deleteBl', id);
        } catch (err) { console.error(err); }
    }
};
