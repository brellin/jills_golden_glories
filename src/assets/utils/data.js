import { dama, lilyLay, maks, trust } from "../images";

const ext_links = {
    bloodlines: {
        lily: 'https://www.k9data.com/pedigree.asp?ID=1148115',
        dama: 'https://www.k9data.com/pedigree.asp?ID=894095',
        maks: 'https://www.k9data.com/pedigree.asp?ID=839569',
        cash: 'https://k9data.com/pedigree.asp?ID=1083640',
        majik: 'https://k9data.com/pedigree.asp?ID=690639',
        rus: 'https://k9data.com/pedigree.asp?ID=891316',
        trust: 'https://k9data.com/pedigree.asp?ID=1231285'
    },
    ens: 'https://www.akc.org/expert-advice/dog-breeding/breeder-puppy-socialization-early-neurological-stimulation/',
    tweed: 'https://en.wikipedia.org/wiki/Tweed_Water_Spaniel',
    wavy: 'https://en.wikipedia.org/wiki/Curly-coated_Retriever'
};

const letters = {
    A: 'EOC8',
    B: 'E12B',
    C: 'E134',
    D: 'E146',
    E: 'E150',
    F: 'E1CF',
    G: 'E563',
    H: 'E1F4',
    L: 'E254',
    M: 'E26E',
    N: 'E294',
    n: 'E66A',
    R: 'E2ED',
    S: 'E2FB',
    s: 'E780',
    T: 'E30C',
    W: 'E364'
};

const l = letter => `&#x${ letters[ letter ] };`;

const bloodlines = [
    {
        id: 1,
        callName: "Lily",
        pluralName: "Lily's",
        headerText: `${ l("L") }ily (mother of puppies)`,
        bloodlink: ext_links.bloodlines.lily,
        imgSrc: lilyLay,
        imgAlt: "Lily laying down",
    },
    {
        id: 2,
        callName: "Dama",
        pluralName: "Dama's",
        headerText: `${ l("L") }ily's ${ l("M") }other`,
        bloodlink: ext_links.bloodlines.dama,
        imgSrc: dama,
        imgAlt: "Dama with her tail being held up",
    },
    {
        id: 3,
        callName: "Maks",
        pluralName: "Maks'",
        headerText: `${ l("L") }ily's ${ l("F") }ather`,
        bloodlink: ext_links.bloodlines.maks,
        imgSrc: maks,
        imgAlt: "Maks sitting pretty",
    },
    {
        id: 4,
        callName: "Trust",
        pluralName: "Trust's",
        headerText: `${ l("T") }rust (father of puppies)`,
        bloodlink: ext_links.bloodlines.trust,
        imgSrc: trust,
        imgAlt: "Trust with his head and tail being held up",
        additionalInfo: `Special thanks to Kelly of <a class="slide" href='https://www.goodasgoldens.com' target="_blank" rel="noopener noreferrer">Good As Goldens</a> for providing Trust as the stud!`,
    },
];

export {
    ext_links,
    l,
    letters,
    bloodlines
};
