import View from "./ViewImp.js";
import { ext_links, l } from "../../assets/utils/data.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About Us');
    }

    renderHtml() {
        return `
            <div class="sub-contain">
                <h1>Bloodlines</h1>

                <div class="bloodline">
                    <div>
                        <h2>${ l('L') }ily (mother of puppies)</h2>
                        <p>See pedigree of Lily <a href=${ ext_links.bloodlines.lily } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                    <img src="../../assets/images/lily_lay.jpg" alt="Lily laying down" />
                </div>
                    
                <div class="bloodline">
                    <div>
                        <h2>${ l('L') }ily's ${ l('M') }other</h2>
                        <p>See pedigree of Dama <a href=${ ext_links.bloodlines.dama } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                    <img src="../../assets/images/dama.jpg" alt="Dama with her tail being held up" />
                </div>
                    
                <div class="bloodline">
                    <div>
                        <h2>${ l('L') }ily's ${ l('F') }ather'</h2>
                        <p>See pedigree of Maks <a href=${ ext_links.bloodlines.maks } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                    <img src="../../assets/images/maks.jpg" alt="Maks sitting pretty" />
                </div>
                
                ${/*
                    <div class="bloodline">
                    <div>
                        <h2>${ l('C') }ash (father of puppies)</h2>
                        <p>See pedigree of Cash <a href=${ ext_links.bloodlines.cash } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                    <img src="../../assets/images/cash_laying.jpg" alt="Cash laying down" />
                </div>
                
                <div class="bloodline">
                    <div>
                        <h2>${ l('C') }ash's ${ l('F') }ather</h2>
                        <p>See pedigree of Majik Wonderboy <a href=${ ext_links.bloodlines.majik } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
                    <img src="../../assets/images/majik_wonderboy.jpeg" alt="Majik Wonderboy" />
                </div>
                
                <div class="bloodline">
                    <div>
                        <h2>${ l('C') }ash's ${ l('M') }other</h2>
                        <p>See pedigree of Lily <a href=${ ext_links.bloodlines.rus } target="_blank" rel="noopener noreferrer">here</a></p>
                    </div>
    </div>*/_ => { } }
            </div>
        `;
    }

}
