export default class {
    /**
     * Constructor for Router class
     * @param {HTMLElement} root HTML element to contain both navigation and routes
     * @param {HTMLElement} nav HTML element to contain the navigation, usually a nav tag
     * @param {HTMLElement} display HTML element to contain the area in which the routes will be displayed
     * @param {Array.<{path: String, title: String, view: Class}>} routes array of objects defining the routes as listed
     */
    constructor(root, nav, display, routes) {
        this.root = root;
        this.nav = nav;
        this.display = display;
        this.routes = routes;
        window.addEventListener('popstate', this.findRouteMatch);
    }

    addRoutesToNav = (className = 'NavLink') => {
        this.routes.forEach(route => {
            const el = document.createElement('a');
            el.innerText = route.title;
            el.classList.add(className);
            el.href = route.path;
            this.nav.appendChild(el);
        });
        document.addEventListener('DOMContentLoaded', _ => {
            document.body.addEventListener('click', e => {
                if (e.target.matches(`.${ className }`)) {
                    e.preventDefault();
                    this.navigateTo(e.target.href);
                }
            });
            this.findRouteMatch();
        });
    };

    addNavAndDisplayToRoot = _ => {
        this.root.appendChild(this.nav);
        this.root.appendChild(this.display);
    };

    findRouteMatch = async _ => {
        const possibleMatches = this.routes.map(route => ({ ...route, isMatch: location.pathname === route.path }));
        let match = possibleMatches.find(pm => pm.isMatch);

        match = !match ? { ...this.routes[ 0 ], isMatch: true } : match;

        const view = new match.view();

        this.display.innerHTML = await view.getHtml();
    };

    navigateTo = url => {
        history.pushState(null, null, url);
        this.findRouteMatch();
    };

}
