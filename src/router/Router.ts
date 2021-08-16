import Route from './Route';
import ObjectLiteral from '../types/ObjectLiteral';

class Router {
    routes: Route[];
    history: History;
    _currentRoute: Route | null;
    _rootQuery: string;

    static __instance: Router | null;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            // eslint-disable-next-line no-constructor-return
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: any, ctx: ObjectLiteral = {}) {
        const route = new Route(pathname, block, {
            rootQuery: this._rootQuery,
            ctx,
        });
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = event => {
            this._onRoute(event.currentTarget.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route: Route = this.getRoute(pathname);

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.navigate(pathname);
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default Router;

