import Home from './Home';
import ENS from './ENS';
import AboutTheBreed from './AboutTheBreed';
import Bloodlines from './Bloodlines';
import PuppyManager from './PuppyManager';

import { deletePicture, deletePup, postNewPuppy } from '../assets/utils/requests';
import { readPublicId } from '../assets/utils/cloudinary';

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

const notEditingPupLayout = pup => {
    const cont = document.createElement('div');
    cont.className = 'pup';
    cont.dataset.id = pup._id;
    const ellipsis = document.createElement('button');
    ellipsis.className = 'ellipsis';
    ellipsis.addEventListener('click', e => editPuppy(pup, cont));
    ellipsis.innerText = '•••';
    const title = document.createElement('h2');
    title.innerText = pup.title;
    const sold = document.createElement('p');
    sold.innerText = pup.sold ? 'Sold' : 'For Sale';
    cont.append(ellipsis, title, sold);
    pup.pictures.forEach(pic => {
        const image = document.createElement('img');
        image.src = pic.url;
        image.alt = pup.title;
        image.title = pup.title;
        image.dataset.cloudinary_name = pic.public_id;
        cont.append(image);
    });

    return cont;

    `<div class="pup" data-id="${ pup._id }">
        <button class="ellipsis">•••</button>
        <h2>${ pup.title }</h2>
        <p>${ pup.sold ? 'Sold' : 'Not Sold' }</p>
        ${ pup.pictures.map(pic => `<img
            src="${ pic.url }"
            alt="${ pup.title }"
            title="${ pup.title }"
            data-cloudinary_name="${ pic.public_id }" 
        />`) }
    </div>`;
};

const unEditPuppy = (pup, cont) => {
    cont.outerHTML = notEditingPupLayout(pup).outerHTML;
    cont = document.querySelector(`[data-id="${ pup._id }"]`);
    cont.querySelector('button.ellipsis').onclick = e => {
        editPuppy(pup, cont);
    };
};

export const addPuppyToContainer = (pup, cont = document.querySelector('div.current_puppies')) => {
    cont.append(notEditingPupLayout(pup));
    const pupCont = cont.querySelector(`[data-id="${ pup._id }"]`);
    console.log(pupCont);
    pupCont.querySelector('button.ellipsis').addEventListener('click', function () {
        editPuppy(pup, pupCont);
    });
};

const editPuppy = (pup, cont) => {
    cont.innerHTML = `
        <button class="x">X</button>
        <button class="ellipsis open">•••</button>
        <input type="text" placeholder="${ pup.title }" />
        <select>
            <option value="true" ${ pup.sold ? 'selected' : '' }>Sold</option>
            <option value="false" ${ !pup.sold ? 'selected' : '' }>Not Sold</option>
        </select>
        <div class="pic-con-con">
            ${ pup.pictures.map(pic => `
                <div class="pic-con" data-public_id="${ pic.public_id }">
                    <div class="head-con">
                        <div></div>
                        <h3>${ readPublicId(pic.public_id) }</h3>
                        <button class="dimg">X</button>
                    </div>
                    <img
                        src="${ pic.url }"
                        alt="${ readPublicId(pic.public_id) }"
                        title="${ readPublicId(pic.public_id) }"
                    />
                </div>
            `) }
        </div>
        `;

    cont.querySelector('button.x').onclick = async e => {
        if (confirm(`Are you certain you want to delete ${ pup.title }?`)) {
            await deletePup(cont.dataset.id);
            cont.parentNode.removeChild(cont);
        }
    };

    cont.querySelector('button.ellipsis').onmouseover = e => e.target.innerText = '—';
    cont.querySelector('button.ellipsis').onmouseout = e => e.target.innerText = '•••';
    cont.querySelector('button.ellipsis').onclick = e => unEditPuppy(pup, cont);

    cont.querySelector('select').onchange = async e => {
        await updatePup(cont.dataset.id, {
            cloudinary_name: cont.dataset.cloudinary_name,
            sold: JSON.parse(e.target.value)
        });
    };

    cont.querySelectorAll('button.dimg')
        .forEach(b => b.onclick = async e => {
            const picCon = e.target.parentNode.parentNode;
            const pid = picCon.dataset.public_id;
            if (confirm(`Are you sure you want to delete ${ readPublicId(pid) }?`)) {
                const data = await deletePicture(pup._id, pid);
                console.log('pic-con', data);
                picCon.parentNode.removeChild(picCon);
            }
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
        loadScript: _ => {
            const fd = new FormData();
            const puppyUploader = document.querySelector('#puppy_uploader');
            const sold = document.querySelector('#sold');
            const puppyTitle = document.querySelector('#puppy_title');
            const newPuppyButton = document.querySelector('button#new_puppy');
            puppyUploader.onchange = e => {
                const [ file ] = e.target.files;
                fd.set('pictures', file);
                addImage(URL.createObjectURL(file));
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
