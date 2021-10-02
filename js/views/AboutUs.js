import { View } from "../classes";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About Us');
    }

    getHtml() {
        return `
            <p>We are proud Texans, living just outside of Abilene. Lily has become a great joy in our lives and we hope to provide a pet who will be a blessing to you as well!</p>
            <p>If you are interested in purchasing a puppy, or simply want more information, please feel free to email us <a href="mailto:jill@goldenglories.com">here</a>!</p>
        `;
    }

}
