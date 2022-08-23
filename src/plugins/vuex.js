import Cookies from 'js-cookie';
import { createStore } from 'vuex';
import axios from './axios';
import router from '../routes';

function makeFormData(pupData) {
    const fd = new FormData();
    fd.set('title', pupData.title);
    pupData.pictures.forEach(pic => fd.append('pictures', pic));
    fd.set('sold', pupData.sold);
    return fd;
}

const store = createStore({
    state: {
        loggedIn: false,
        puppies: []
    },
    mutations: {
        login(state) {
            state.loggedIn = true;
        },
        pupulate(state, pups) {
            state.puppies = pups;
        },
        deletePup(state, id) {
            state.puppies = state.puppies.filter(pup => pup._id !== id);
        },
        deletePic(state, { id, public_id }) {
            const newPups = state.puppies.slice();
            const pupMatch = newPups.findIndex((pup) => pup._id === id);
            newPups[ pupMatch ].pictures = newPups[ pupMatch ].pictures.filter(pic => pic.public_id !== public_id);
            state.puppies = newPups;
        },
        addPup(state, newPuppy) {
            state.puppies = [ ...state.puppies, newPuppy ];
        },
        editPup(state, { id, edits }) {
            console.log(id, edits);
            edits.sold = edits.sold === 'true';
            const editedPups = state.puppies.slice();
            const pupMatch = editedPups.findIndex(pup => pup._id === id);
            editedPups[ pupMatch ] = edits;
            state.puppies = editedPups;
        }
    },
    actions: {
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
        }
    }
});

export default store;
