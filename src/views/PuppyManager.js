import View from './ViewImp';
import { getAllPuppies, login } from '../assets/utils/requests';
import { addPuppyToContainer } from './rendering/PMRenderer';
import { scrollLock, scrollUnLock } from './rendering/scrollLock';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Puppy Manager');

        document.addEventListener('DOMContentLoaded', _ => {
            scrollLock();
            document.querySelector('form').addEventListener('submit', e => this.confirmUser(e));
        });
    }

    async confirmUser(e) {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input');
        const username = inputs[ 0 ].value;
        const password = inputs[ 1 ].value;

        try {
            await login(username, password);
            scrollUnLock();
            const modal = document.querySelector('div.modal-bg');
            modal.parentElement.removeChild(modal);
            this.fetchPuppies();
        } catch (err) {
            console.log('wrong');
        }
    }

    async fetchPuppies() {
        try {
            const pups = await getAllPuppies();
            if (pups && pups.length) {
                document.querySelector('.current_puppies').innerHTML = '';
                pups.forEach(pup => addPuppyToContainer(pup));
            }
        } catch (err) { console.err(err); }
    }

    async renderHtml() {
        return `
        <div class="modal-bg">
            <div class="modal">
                <form>
                    <div>
                        <label>Username: </label>
                        <input type="text" autofocus />
                    </div>
                    
                    <div>
                        <label>Password: </label>
                        <input type="password" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
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
                    <input type="file" accept="image/*" id="puppy_uploader" disabled />
                </div>

                <div>
                    <label htmlFor="sold">Sold:</label>

                    <select id="sold" disabled>
                        <option value="true">Yes</option>
                        <option value="false" selected>No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="puppy_title">Title:</label>
                    <input type="text" id="puppy_title" disabled />
                </div>

                <button id="new_puppy" disabled>Submit</button>
            </div>
        `;
    }

};
