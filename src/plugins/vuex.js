import { createStore } from 'vuex';
import actions from './actions';

const store = createStore({
    state: {
        loggedIn: false,
        puppies: [],
        bloodlines: []
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
            edits.sold = edits.sold === 'true';
            const editedPups = state.puppies.slice();
            const pupMatch = editedPups.findIndex(pup => pup._id === id);
            editedPups[ pupMatch ] = edits;
            state.puppies = editedPups;
        },
        bloodulate(state, bls) {
            state.bloodlines = bls.sort((a, b) => (a._id < b._id ? -1 : a._id > b._id ? 1 : 0));
        },
        addBl(state, newBl) {
            state.bloodlines = [ ...state.bloodlines, newBl ];
        },
        editBl(state, { id, edits }) {
            console.log(id, edits);
            const editedBls = state.bloodlines.slice();
            const blMatch = editedBls.findIndex(bl => bl._id === id);
            editedBls[ blMatch ] = edits;
            state.bloodlines = editedBls;
        },
        deleteBl(state, id) {
            state.bloodlines = state.bloodlines.filter(bl => bl._id !== id);
        }
    },
    actions
});

export default store;
