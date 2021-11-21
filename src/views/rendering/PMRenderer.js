import { deletePicture, deletePup } from '../../assets/utils/requests';
import { readPublicId } from '../../assets/utils/cloudinary';

export const removeModal = _ => {
    const modal = document.querySelector('div.modal-bg');
    modal.parentElement.removeChild(modal);
};

export const addImage = (image, cont = document.querySelector('div.new_puppy')) => {
    const newImg = document.createElement('img');
    newImg.src = image;
    newImg.dataset.pupThumb = '';
    cont.insertBefore(newImg, cont.firstChild);
};

export const clearPuppyAdder = (cont = document.querySelector('div.new_puppy')) => {
    cont.querySelector('select').value = "false";
    cont.querySelector('input[type=file]').value = '';
    cont.querySelector('input[type=text]').value = '';
};

export const notEditingPupLayout = pup => {
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
                const data = await deletePicture(pup._id,
                    pid);
                console.log('pic-con', data);
                picCon.parentNode.removeChild(picCon);
            }
        });
};
