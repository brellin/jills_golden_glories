import { View } from "../classes";

export default class extends View {
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
