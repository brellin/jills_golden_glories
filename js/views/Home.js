import AbstractView from "../classes/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle();
    }

    getHtml() {
        return `
        <p>Welcome to Golden Glories. We breed English Cream Golden Retriever puppies. We are located in Tuscola, Texas, about 20 miles southwest of Abilene.</p>
        `;
    }

}
