function changeImg(thumbs, imgs, forward = true) {
    const lastThumb = thumbs.children.length - 1;
    const lastImg = imgs.children.length - 1;
    const visInd = Array.from(imgs.children).indexOf(imgs.querySelector('.visible'));

    const currThumb = thumbs.children[ visInd ];
    currThumb.classList.remove('active');
    thumbs.children[
        visInd === (forward ? lastThumb : 0) ?
            (forward ? 0 : lastThumb) :
            (forward ? visInd + 1 : visInd - 1)
    ].classList.add('active');

    const currImg = imgs.children[ visInd ];
    currImg.classList.remove('visible');
    imgs.children[
        visInd === (forward ? lastImg : 0) ?
            (forward ? 0 : lastImg) :
            (forward ? visInd + 1 : visInd - 1)
    ].classList.add('visible');
}

export function renderSlideshow(list, cont = document.querySelector('div.slideshow')) {
    const slideThumbs = document.createElement('div');
    slideThumbs.className = 'slideThumbs';

    const slideImgs = document.createElement('div');
    slideImgs.className = 'slideImgs';

    const imgLabelCont = document.createElement('div');
    imgLabelCont.className = 'pupDivCont';
    imgLabelCont.appendChild(slideThumbs);
    imgLabelCont.appendChild(slideImgs);

    const prev = document.createElement('button');
    prev.innerText = '⇠';
    prev.addEventListener('click', _ => changeImg(slideThumbs, slideImgs, false));

    list.forEach((item, i) => {
        const slideThumb = document.createElement('img');
        slideThumb.src = item.pictures[ 0 ].url;
        slideThumb.classList.add('thumb');
        slideThumb.onclick = function () {
            slideThumbs.childNodes.forEach((n, index) => index === i ? n.classList.add('active') : n.classList.remove('active'));
            slideImgs.childNodes.forEach((n, index) => index === i ? n.classList.add('visible') : n.classList.remove('visible'));
        };

        const slideImg = document.createElement('img');
        slideImg.src = item.pictures[ 0 ].url;
        slideImg.classList.add('full');

        const slideImgTitle = document.createElement('label');
        slideImgTitle.innerText = item.title;

        const slideImgCont = document.createElement('div');
        if (i === 0) {
            slideImgCont.classList.add('visible');
            slideThumb.classList.add('active');
        }
        slideThumbs.appendChild(slideThumb);
        slideImgCont.appendChild(slideImg);
        slideImgCont.appendChild(slideImgTitle);

        slideImgs.appendChild(slideImgCont);
    });

    const forw = document.createElement('button');
    forw.innerText = '⇢';
    forw.addEventListener('click', _ => changeImg(slideThumbs, slideImgs));

    cont.innerHTML = '';
    cont.appendChild(prev);
    cont.appendChild(imgLabelCont);
    cont.appendChild(forw);

    return;

    `
        <div class="slideshow">
            <button>⇠</button>

            <div class="pupDivCont">
                <div class="slideThumbs">
                    <img />
                </div>

                <div class="slideImgs">
                    <div>
                        <img />
                        <label></label>
                    </div>
                </div>
            </div>

            <button>⇢</button>
        </div>
    `;
}
