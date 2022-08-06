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
        }
    },
    actions: {
        async pupulate({ commit }) {
            const { data } = await axios.get('puppies');
            commit('pupulate', data);
        }
    }
});

export default store;
