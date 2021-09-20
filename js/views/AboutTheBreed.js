import AbstractView from "../classes/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('About the Breed');
    }

    getHtml() {
        return `
            <p>English Cream Golden Retrievers were first bred in Scotland during the 19th century between 1854 and 1894. Baron Tweedmouth bred together his 2 rare dogs. The breeds, which are now extinct, were the Wavy Coated Retriever and the Tweed Water Spaniel. Lily’s parents were imported from the Ukraine. They have excellent clearances and are clear genetically.</p>
        `;
    }

}
