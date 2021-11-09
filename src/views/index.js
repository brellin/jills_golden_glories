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
            const addImage = (image, cont = document.querySelector('div.new_puppy')) => {
                const imgExists = cont.children.namedItem('newPupImage');
                if (imgExists) cont.removeChild(imgExists);
                const newImg = document.createElement('img');
                newImg.src = image;
                newImg.id = 'newPupImage';
                cont.insertBefore(newImg, cont.firstChild);
            };
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
            sold.onchange = e => fd.set('sold', JSON.parse(e.target.value));
            puppyTitle.onchange = e => fd.set('title', e.target.value);
            newPuppyButton.onclick = async e => {
                e.preventDefault();
                if (!fd.has('picture') || !fd.has('title')) {
                    if (!fd.has('picture') && !fd.has('title')) alert('You must give the puppy a title and a picture.');
                    else if (!fd.has('title')) alert('You must give the puppy a title.');
                    else alert(`You must give ${ fd.get('title') } a picture.`);
                    return;
                }
                if (!fd.has('sold')) fd.set('sold', JSON.parse(sold.value));
                const data = await postNewPuppy(fd);
                console.log(data);
            };

        }
    }
];
