import View from "./ViewImp";
import { ext_links, l } from '../assets/utils/data';
import { getAllPuppies } from '../assets/utils/requests';

export default class extends View {
    constructor() {
        super();
        this.setTitle('Puppies & Process');
        getAllPuppies()
            .then(pups => {
                const cont = document.querySelector('div.puppy_slideshow');
                if (pups.length) {
                    cont.innerHTML = '';

                    const puppyThumbs = document.createElement('div');
                    puppyThumbs.className = 'puppyThumbs';

                    const puppyImgs = document.createElement('div');
                    puppyImgs.className = 'puppyImgs';

                    const pupDivCont = document.createElement('div');
                    pupDivCont.className = 'pupDivCont';
                    pupDivCont.appendChild(puppyThumbs);
                    pupDivCont.appendChild(puppyImgs);

                    const prev = document.createElement('button');
                    prev.innerText = '⇠';
                    prev.onclick = _ => {
                        let vis;
                        puppyImgs.childNodes.forEach((n, i) => { if (n.classList.contains('visible')) vis = i; });
                        const currImg = puppyImgs.children[ vis ];
                        currImg.classList.remove('visible');
                        puppyImgs.children[ vis === 0 ? puppyImgs.children.length - 1 : vis - 1 ].classList.add('visible');

                        const currThumb = puppyThumbs.children[ vis ];
                        currThumb.classList.remove('active');
                        puppyThumbs.children[ vis === 0 ? puppyThumbs.children.length - 1 : vis - 1 ].classList.add('active');

                    };

                    pups.forEach((pup, i) => {
                        const pupThumb = document.createElement('img');
                        pupThumb.src = pup.pictures[ 0 ].url;
                        pupThumb.classList.add('thumb');
                        pupThumb.onclick = function () {
                            puppyThumbs.childNodes.forEach((n, index) => index === i ? n.classList.add('active') : n.classList.remove('active'));
                            puppyImgs.childNodes.forEach((n, index) => index === i ? n.classList.add('visible') : n.classList.remove('visible'));
                        };

                        const pupImg = document.createElement('img');
                        pupImg.src = pup.pictures[ 0 ].url;
                        pupImg.classList.add('full');

                        const pupTitle = document.createElement('label');
                        pupTitle.innerText = pup.title;

                        const pupImgCont = document.createElement('div');
                        if (i === 0) {
                            pupImgCont.classList.add('visible');
                            pupThumb.classList.add('active');
                        }
                        puppyThumbs.appendChild(pupThumb);
                        pupImgCont.appendChild(pupImg);
                        pupImgCont.appendChild(pupTitle);

                        puppyImgs.appendChild(pupImgCont);
                    });
                    const forw = document.createElement('button');
                    forw.innerText = '⇢';
                    forw.onclick = _ => {
                        let vis;
                        puppyImgs.childNodes.forEach((n, i) => { if (n.classList.contains('visible')) vis = i; });

                        const currImg = puppyImgs.children[ vis ];
                        currImg.classList.remove('visible');
                        puppyImgs.children[ vis === puppyImgs.children.length - 1 ? 0 : vis + 1 ].classList.add('visible');

                        const currThumb = puppyThumbs.children[ vis ];
                        currThumb.classList.remove('active');
                        puppyThumbs.children[ vis === puppyThumbs.children.length - 1 ? 0 : vis + 1 ].classList.add('active');
                    };

                    cont.appendChild(prev);
                    cont.appendChild(pupDivCont);
                    cont.appendChild(forw);
                } else cont.innerHTML = `
                    <p>There are no puppies available at this time.</p>
                `;
            })
            .catch(err => console.error(err));
    }

    async renderHtml() {
        return `
        <h1>${ window.screen.width > 800 ? `${ l('E') }arly ${ l('N') }eurological ${ l('S') }timulation` : 'Puppies' }</h1>
        <div class="sub-contain">

            <div title="Lady Liliana Rae" class="lily_pup"></div>
            
            <p>When you buy one of our puppies, you can rest assured that we raise each one with care. We use methods categorized as <i>Early Neurological Stimulation</i> (<a class="slide" href="${ ext_links.ens }" target="_blank" rel="noopener noreferrer" title="AKC's Explanation of ENS">ENS</a>) that stimulate neurological activity at a very young age, to ensure your puppy will be as great to you as Lily has been to us.</p>
            
            <p>The first days of life, starting with day 3, are when the puppies are rapidly growing and developing neurologically.  By using ENS, we can have your puppy well on the way to being desensitized and socialized before you take them home.</p>

            <h1 class="contained">Puppy Pictures!</h1>

            <div class="puppy_slideshow"></div>
        </div>
        `;
    }

}
