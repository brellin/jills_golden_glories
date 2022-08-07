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
            state.puppies = state.puppies.slice().filter(pup => pup._id !== id);
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
        }
    }
});

export default store;
