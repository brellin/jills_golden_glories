import View from "./ViewImp.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle('About Us');
    }

    renderHtml() {
        return `
        <div class="rp">
            <div title="Lady Liliana Rae" class="lily_about"></div>
            <p>We are proud Texans, living just outside of Abilene. Lily has become a great joy in our lives and we hope to provide a pet who will be a blessing to you as well!</p>
            <p>If you are interested in purchasing a puppy, or simply want more information, please feel free to email us at <a href="mailto:jill@goldenglories.com">jill@goldenglories.com</a>!</p>
        </div>
        `;
    }

}
