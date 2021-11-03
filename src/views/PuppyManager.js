import View from './ViewImp';
import { getAllPuppies } from '../assets/utils/requests';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Puppy Manager');
    }

    async renderHtml() {
        const pups = await getAllPuppies();
        return `
        <h1>Puppy Manager</h1>
            <div class="current_puppies">
                ${ pups.map(pup => `
                <div>
                    <h2>${ pup.title }</h2>
                    <p>${ pup.sold ? 'Sold.' : 'Not yet sold.' }</p>
                    <img src="${ pup.picture }" alt="${ pup.title }" data-id="${ pup._id }" />
                </div>
                `).join('') }
            </div >

            <div class="new_puppy">
                <h1>Add a New Puppy</h1>

                <div>
                    <label htmlFor="puppy_uploader">Image:</label>
                    <input type="file" accept="image/*" id="puppy_uploader" />
                </div>

                <div>
                    <label htmlFor="sold">Sold:</label>

                    <select id="sold">
                        <option value="true">Yes</option>
                        <option value="false" selected>No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="puppy_title">Title:</label>
                    <input type="text" id="puppy_title" />
                </div>

                <button id="new_puppy">Submit</button>
            </div>
        `;
    }

};
