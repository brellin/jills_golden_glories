import View from "./ViewImp.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle();
    }

    renderHtml() {
        return `
        <p>Welcome to Golden Glories. We breed English Cream Golden Retriever puppies. We are located in Tuscola, Texas, about 20 miles southwest of Abilene.</p>
        <div class="spacer home"></div>
        <p>We emphasize that we breed <i>English</i> Golden Retrievers. You can investigate the differences between American and English Golden Retrievers <a href="/about_the_breed" class="internal">here</a>. The pictures that you see of dogs on this website are taken by us. The adult dog you see is Lady Liliana Rae, the mother of your future puppies!</p>
        `;
    }

}
