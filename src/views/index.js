import Home from './Home';
import ENS from './ENS';
import AboutTheBreed from './AboutTheBreed';
import Bloodlines from './Bloodlines';
import PuppyManager from './PuppyManager';

import { postNewPuppy } from '../assets/utils/requests';

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
            puppyUploader.onchange = e => fd.set('picture', e.target.files[ 0 ]);
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
            };
        }
    }
];
