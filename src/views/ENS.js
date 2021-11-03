import View from "./ViewImp";
import { ext_links, l } from '../assets/utils/data';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Puppies & Process');
    }

    async renderHtml() {
        return `
        <h1>${ window.screen.width > 800 ? `${ l('E') }arly ${ l('N') }eurological ${ l('S') }timulation` : 'Puppies' }</h1>
        <div class="sub-contain">

            <div title="Lady Liliana Rae" class="lily_pup"></div>
            
            <p>When you buy one of our puppies, you can rest assured that we raise each one with care. We use methods categorized as <i>Early Neurological Stimulation</i> (<a class="slide" href="${ ext_links.ens }" target="_blank" rel="noopener noreferrer" title="AKC's Explanation of ENS">ENS</a>) that stimulate neurological activity at a very young age, to ensure your puppy will be as great to you as Lily has been to us.</p>
            
            <p>The first days of life, starting with day 3, are when the puppies are rapidly growing and developing neurologically.  By using ENS, we can have your puppy well on the way to being desensitized and socialized before you take them home.</p>
        </div>
        `;
    }

}
