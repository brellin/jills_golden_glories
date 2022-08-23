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

export {
    ext_links,
    l,
    letters,
};
