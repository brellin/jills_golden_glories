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
        this.root.appendChild(this.nav);
        this.root.appendChild(this.display);
        window.addEventListener('popstate', this.findRouteMatch);
    }

    /**
     * Adds each provided route as an <a class="className"> to the navigation, adds an event lisener to automatically detect the active route, and another listener to propagate every <a> clicked for the same purpose.
     * @param {String} className name of the class to be used for navigation links (defaults to "NavLink")
     */
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

    findRouteMatch = _ => {
        const possibleMatches = this.routes.map(route => ({ ...route, isMatch: location.pathname === route.path }));
        let match = possibleMatches.find(pm => pm.isMatch);

        if (!match) match = { ...this.routes[ 0 ], isMatch: true };

        const view = new match.view();

        this.handleActiveLink();
        this.display.innerHTML = view.getHtml();
    };

    navigateTo = url => {
        history.pushState(null, null, url);
        this.findRouteMatch();
    };

    handleActiveLink = _ => {
        this.nav.childNodes.forEach(link => {
            const routeMatch = this.routes.find(route => route.path === location.pathname);
            if (routeMatch) link.innerText === routeMatch.title ?
                link.classList.add('active') :
                link.classList.remove('active');
            else link.classList.remove('active');
        });
    };

}
