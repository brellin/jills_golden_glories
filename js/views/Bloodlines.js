import View from "./ViewImp.js";
import { ext_links, l } from "../../assets/utils/data.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About Us');
    }

    bloodlines = [
        {
            callName: 'Lily',
            headerText: `${ l('L') }ily (mother of puppies)`,
            bloodlink: ext_links.bloodlines.lily,
            imgSrc: '../../assets/images/lily_lay.jpg',
            imgAlt: 'Lily laying down'
        },
        {
            callName: 'Dama',
            headerText: `${ l('L') }ily's ${ l('M') }other`,
            bloodlink: ext_links.bloodlines.dama,
            imgSrc: '../../assets/images/dama.jpg',
            imgAlt: 'Dama with her tail being held up'
        },
        {
            callName: 'Maks',
            headerText: `${ l('L') }ily's ${ l('F') }ather`,
            bloodlink: ext_links.bloodlines.maks,
            imgSrc: '../../assets/images/maks.jpg',
            imgAlt: 'Maks sitting pretty'
        },
        // {
        //     callName: 'Cash',
        //     headerText: `${ l('C') }ash (father of puppies)`,
        //     bloodlink: ext_links.bloodlines.cash,
        //     imgSrc: '../../assets/images/cash_laying.jpg',
        //     imgAlt: 'Cash laying down'
        // },
        // {
        //     callName: 'Majik Wonderboy',
        //     headerText: `${ l('C') }ash's ${ l('F') }ather`,
        //     bloodlink: ext_links.bloodlines.majik,
        //     imgSrc: '../../assets/images/majik_wonderboy.jpeg',
        //     imgAlt: 'Majik Wonderboy'
        // },
        // {
        //     callName: 'Rus Pekos Glukoza',
        //     headerText: `${ l('C') }ash's ${ l('M') }other`,
        //     bloodlink: ext_links.bloodlines.rus,
        //     imgSrc: '',
        //     imgAlt: ''
        // },
    ];

    renderHtml() {
        return `
            <h1>${ l('B') }loodlines</h1>
            <div class="sub-contain">
                ${ this.bloodlines.map(bl => `<div class='bloodline'>
                    <h2>${ bl.headerText }</h2>
                    ${ bl.imgSrc ? `<img src="${ bl.imgSrc }" alt="${ bl.imgAlt }" />` : '' }
                    <a
                        href="${ bl.bloodlink }" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View ${ bl.callName }'${ bl.callName[ bl.callName.length - 1 ] === 's' ? '' : 's' } pedigree
                    </a>
                    </div>`)
                .join('') }
            </div>`;
    }

}
