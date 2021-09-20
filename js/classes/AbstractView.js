export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = `Golden Glories${ title ? ` - ${ title }` : '' }`;
    }

    async getHtml() {
        return "";
    }

}