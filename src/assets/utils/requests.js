import axios from 'axios';

console.log(process.env.NODE_ENV);

axios.defaults.baseURL = process.env.NODE_ENV && process.env.NODE_ENV === 'development' ?
    'http://localhost:9455/' :
    'https://goldenglories.herokuapp.com/';

export const postNewPuppy = async newPuppy => {
    try {
        const { data } = await axios.post('/puppies', newPuppy,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
        return data;
    } catch ({ message }) { return message; }
};
export const getAllPuppies = async _ => {
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

export const deletePup = async (id) => {
    try {
        const { data } = await axios.delete(`puppies/${ id }`);
        return data;
    } catch (err) { console.error(err); }
};
