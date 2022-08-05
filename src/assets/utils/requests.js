import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV && process.env.NODE_ENV === 'development' ?
    'http://localhost:9455/' :
    'https://goldenglories.herokuapp.com/';

export const postNewPuppy = async newPuppy => {
    const fd = new FormData();
    fd.set('title', newPuppy.title);
    newPuppy.pictures.forEach(pic => fd.set('pictures', pic));
    fd.set('sold', false);

    try {
        const { data } = await axios.post('/puppies', fd,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
        return data;
    } catch ({ message }) { return message; }
};
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

/**
 * 
 * @param {String} id id for puppy
 * @param {String} public_id public id locating picture on cloudinary
 * @returns Promise from server
 */
export const deletePicture = async (id, public_id) => {
    try {
        const { data } = await axios.put(`puppies/picture/${ id }`, { public_id });
        return data;
    } catch (err) { console.error(err); }
};

export const deletePup = async id => {
    try {
        const { data } = await axios.delete(`puppies/${ id }`);
        return data;
    } catch (err) { console.error(err); }
};

export const login = async (username, password) => await axios.create({ headers: { username, password, secret: process.env.VUE_APP_SECRET } }).post('users/login');
