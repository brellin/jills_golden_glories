import axios from 'axios';

export const getAllPuppies = async () => {
    try {
        const { data } = await axios.get('puppies');
        return data;
    } catch ({ message }) { console.error(message); }
};

export const updatePup = async (id, update) => {
    try {
        const { data } = await axios.put(`puppies/${ id }`, update);
        return data;
    } catch (err) { console.error(err); }
};

export const login = async (username, password) => await axios.create({ headers: { username, password, secret: process.env.VUE_APP_SECRET } }).post('users/login');
