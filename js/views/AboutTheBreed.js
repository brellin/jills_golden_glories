import View from "./ViewImp.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About the Breed');
    }

    getHtml() {
        return `
            <div class="agrVegr" style="clear:both"><a href="http://infographicplaza.com/american-golden-retriever-vs-english-cream-golden-retrievers/" target="_blank"  rel="nofollow" ><img src="http://infographicplaza.com/wp-content/uploads/golden-retriever-infographic.jpg" title="American Golden Retriever Vs. English Cream Golden Retrievers" alt="American Golden Retriever Vs. English Cream Golden Retrievers" border="0" /></a></div><div></div>
            <p>English Cream Golden Retrievers were first bred in Scotland during the 19th century between 1854 and 1894. Baron Tweedmouth bred together his 2 rare dogs. The breeds, which are now extinct, were the Wavy Coated Retriever and the Tweed Water Spaniel. Lily’s parents were imported from the Ukraine. They have excellent clearances and are clear genetically.</p>

        `;
    }

}
