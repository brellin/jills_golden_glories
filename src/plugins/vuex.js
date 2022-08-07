import { deletePup } from '../assets/utils/requests';
import { createStore } from 'vuex';
import axios from './axios';

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
            console.log(newPuppy);
            state.puppies = [ ...state.puppies, newPuppy ];
        }
    },
    actions: {
        async pupulate({ commit }) {
            const { data } = await axios.get('puppies');
            commit('pupulate', data);
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
            const fd = new FormData();
            fd.set('title', newPuppy.title);
            newPuppy.pictures.forEach(pic => fd.append('pictures', pic));
            fd.set('sold', false);


            try {
                const { data } = await axios.post('/puppies', fd,
                    {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    });
                commit('addPup', data);
            } catch ({ message }) { console.error(message); }
        }
    }
});

export default store;
