import View from './ViewImp';
import { getAllPuppies } from '../assets/utils/requests';
import { addPuppyToContainer } from './rendering/PMRenderer';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Puppy Manager');
        getAllPuppies()
            .then(pups => {
                if (pups && pups.length) {
                    document.querySelector('.current_puppies').innerHTML = '';
                    pups.forEach(pup => addPuppyToContainer(pup));
                }
            });
    }

    async renderHtml() {
        return `
        <h1>Puppy Manager</h1>
            <div class="current_puppies">
                ${ `<div class='pup'>
                    <h2>Nothing</h2>
                    <p>...</p>
                    <img
                        src="https://goldenglories.com/images/logo.png"
                        alt="Nothing"
                        title="Awaiting response from server"
                    />
                </div>`.repeat(3) }
            </div >

            <h1>Add a New Puppy</h1>

            <div class="new_puppy">
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
