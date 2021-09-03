import ObjectLiteral from '../types/ObjectLiteral';

function isEqual(lhs: any, rhs: any) {
    return lhs === rhs;
}

function render(query: string, block: any) {
    const root = document.querySelector(query);
    root.append(block.getContent());
    return root;
}

class Route {
    _pathname: string;
    _blockClass: any;
    _block: null | any;
    _props: ObjectLiteral;

    constructor(pathname: string, view: any, props: ObjectLiteral) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.destroy();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        const {
            rootQuery,
            ctx = {},
        } = this._props;
        this._block = new this._blockClass(ctx);
        render(rootQuery, this._block);
    }
}

export default Route;
