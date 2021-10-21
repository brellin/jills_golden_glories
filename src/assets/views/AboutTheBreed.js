import View from "./ViewImp.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About the Breed');
    }

    renderHtml() {
        return `
            <h1>History of the Breed</h1>
            <br />
            <p>The Golden Retriever breed was developed in Scotland in the late 1800s to assist hunters in retrieving downed waterfowl.  Baron Tweedmouth bred together his 2 rare dogs. The breeds, which are now extinct, were  the Wavy Coated Retriever and the Tweed Water Spaniel. As time passed, the breed split into American and European versions, with the European-based bloodlines having luxurious cream-colored coats with larger, blockier heads and larger bone structures which set them apart from the American Goldens.  Golden Retrievers were fully recognized by The Kennel Club (Britain) in 1911 and the American Kennel Club in 1932.</p>
            
            <h1>English and American Comparison</h1>
            <br />
            <div class="agrVegr" style="clear:both"><a href="http://infographicplaza.com/american-golden-retriever-vs-english-cream-golden-retrievers/" target="_blank"  rel="nofollow" ><img src="http://infographicplaza.com/wp-content/uploads/golden-retriever-infographic.jpg" title="American Golden Retriever Vs. English Cream Golden Retrievers" alt="American Golden Retriever Vs. English Cream Golden Retrievers" border="0" /></a></div>

        `;
    }

}
