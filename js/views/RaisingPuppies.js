import AbstractView from "../classes/AbstractView.js";
import { ext_links } from '../../assets/utils/data.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Raising Puppies');
    }

    getHtml() {
        return `
        <div className="rp">
            <img src="/assets/images/Lily.png" alt="Lily, an English Cream Golden Retriever" title="Lady Liliana Rae" class="lily_main" />
            
            <p>When you buy one of our puppies, you can rest assured that we raise each one with care. We use methods categorized as <i>Early Neurological Stimulation</i> (<a href="${ ext_links.ens }" target="_blank" rel="noopener noreferrer" title="AKC's Explanation of ENS">ENS</a>) that stimulate neurological activity at a very young age, to ensure your puppy will be as great to you as Lily has been to us.</p>
            
            <p>Lily's <a href="${ ext_links.bloodline }" target="_blank" rel="noopener noreferrer" title="Lily's Pedigree">champion bloodline</a>, along with her multiple clearances makes her more than an exceptional candidate to breed.</p>
        </div>
        `;
    }

}
