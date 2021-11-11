import Home from './Home';
import ENS from './ENS';
import AboutTheBreed from './AboutTheBreed';
import Bloodlines from './Bloodlines';
import PuppyManager from './PuppyManager';

import { deletePup, postNewPuppy } from '../assets/utils/requests';

const removeImageIfExists = (cont = document.querySelector('div.new_puppy')) => {
    const imgExists = cont.children.namedItem('newPupImage');
    if (imgExists) cont.removeChild(imgExists);
};

const addImage = (image, cont = document.querySelector('div.new_puppy')) => {
    removeImageIfExists();
    const newImg = document.createElement('img');
    newImg.src = image;
    newImg.id = 'newPupImage';
    cont.insertBefore(newImg, cont.firstChild);
};

const clearPuppyAdder = (cont = document.querySelector('div.new_puppy')) => {
    cont.querySelector('select').value = "false";
    cont.querySelector('input[type=file]').value = '';
    cont.querySelector('input[type=text]').value = '';
};

export const addPuppyToContainer = (pup, cont = document.querySelector('div.current_puppies')) => {
    console.log(pup);
    cont.innerHTML += `<div class="pup" data-id="${ pup._id }">
        <button class="x">X</button>
        <h2>${ pup.title }</h2>
        <select>
            <option value="true" ${ pup.sold ? 'selected' : '' }>Sold</option>
            <option value="false" ${ !pup.sold ? 'selected' : '' }>Not Sold</option>
        </select>
        ${ pup.picture.map(pic => `<img
                src="${ pic.url }"
                alt="${ pup.title }"
                title="${ pup.title }"
                data-cloudinary_name="${ pic.public_id }" 
            />`) }
        
    </div>`;
    const x = document.querySelectorAll('button.x');
    x.forEach(b => {
        b.onclick = e => {
            const cont = e.target.parentNode;
            if (confirm(`Are you certain you want to delete ${ cont.querySelector('h2').innerText }?`)) {
                console.log(deletePup(cont.dataset.id));
            }
        };
    });
};

export default [
    {
        path: '/',
        title: 'Home',
        view: Home
    },
    {
        path: '/puppies',
        title: 'Puppies',
        view: ENS
    },
    {
        path: '/about_the_breed',
        title: 'About the Breed',
        view: AboutTheBreed
    },
    {
        path: '/bloodlines',
        title: 'Bloodlines',
        view: Bloodlines
    },
    {
        path: '/puppyManager',
        title: 'Puppy Manager',
        view: PuppyManager,
        display: false,
        loadScript: e => {
            console.log('puppymanager loadScript e:', e);
            const fd = new FormData();
            const puppyUploader = document.querySelector('#puppy_uploader');
            const sold = document.querySelector('#sold');
            const puppyTitle = document.querySelector('#puppy_title');
            const newPuppyButton = document.querySelector('button#new_puppy');
            puppyUploader.onchange = e => {
                const [ file ] = e.target.files;
                fd.set('picture', file);
                addImage(URL.createObjectURL(file));
            };
            sold.onchange = e => fd.set('sold', e.target.value);
            puppyTitle.onchange = e => fd.set('title', e.target.value);
            newPuppyButton.onclick = async e => {
                e.preventDefault();
                if (!fd.has('picture') || !fd.has('title')) {
                    if (!fd.has('picture') && !fd.has('title')) alert('You must give the puppy a title and a picture.');
                    else if (!fd.has('title')) alert('You must give the puppy a title.');
                    else alert(`You must give ${ fd.get('title') } a picture.`);
                    return;
                }
                if (!fd.has('sold')) fd.set('sold', sold.value);
                const data = await postNewPuppy(fd);
                console.log(data);
                addPuppyToContainer(data);
                clearPuppyAdder();
            };

        }
    }
];
