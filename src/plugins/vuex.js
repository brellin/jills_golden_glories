import { createStore } from 'vuex';

const store = createStore({
    state: {
        loggedIn: false
    },
    mutations: {
        login(state) {
            state.loggedIn = true;
        }
    }
});

export default store;
