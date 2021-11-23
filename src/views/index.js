import Home from './Home';
import ENS from './ENS';
import AboutTheBreed from './AboutTheBreed';
import Bloodlines from './Bloodlines';
import PuppyManager from './PuppyManager';

import { postNewPuppy } from '../assets/utils/requests';
import { addImage, addPuppyToContainer } from './rendering/PMRenderer';

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
        loadScript: _ => {
            const fd = new FormData();
            const puppyUploader = document.querySelector('#puppy_uploader');
            const sold = document.querySelector('#sold');
            const puppyTitle = document.querySelector('#puppy_title');
            const newPuppyButton = document.querySelector('button#new_puppy');
            puppyUploader.onchange = e => {
                const thumbs = document.querySelectorAll('[data-pup-thumb]');
                thumbs.forEach(el => el.parentElement.removeChild(el));
                fd.delete('pictures');
                for (const file of e.target.files) {
                    fd.set('pictures', file);
                    addImage(URL.createObjectURL(file));
                }
            };
            sold.onchange = e => fd.set('sold', e.target.value);
            puppyTitle.onchange = e => fd.set('title', e.target.value);
            newPuppyButton.onclick = async e => {
                e.preventDefault();
                if (!fd.has('pictures') || !fd.has('title')) {
                    if (!fd.has('pictures') && !fd.has('title')) alert('You must give the puppy a title and a picture.');
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
