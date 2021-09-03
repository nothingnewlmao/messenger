import ObjectLiteral from '../../types/ObjectLiteral';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type Options = {
    method: METHODS,
    timeout?: number,
    headers?: Record<string, string>,
    data?: any
};

function queryStringify(data: Record<string, any>) {
    const noData = !data && Boolean(Object.keys(data).length);
    if (noData) {
        return '';
    }

    const queryString = Object.entries(data)
        .reduce((queryString: string, [key, value]) => `${queryString}${key}=${value}&`, '?');
    queryString.slice(-1);
    return queryString;
}

class HTTPTransport {
    BASE_URL = '';

    constructor(url: string = '') {
        this.BASE_URL = url;
    }

    get = (url: string, requestOptions: ObjectLiteral = {timeout: 3000, data: ''}) => {
        const {data} = requestOptions;
        const options = {...requestOptions, method: METHODS.GET};
        const queryString = `${this.BASE_URL}${url}${queryStringify(data)}`;
        return this.request(queryString, options);
    }

    post = (url: string, requestOptions: ObjectLiteral = {}): Promise<XMLHttpRequest> => {
        const options = {
            ...requestOptions,
            method: METHODS.POST,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.request(`${this.BASE_URL}${url}`, options);
    }

    put = (url: string,
        requestOptions: ObjectLiteral = {}): Promise<XMLHttpRequest> => {
        const options = {...requestOptions, method: METHODS.PUT};
        return this.request(`${this.BASE_URL}${url}`, options);
    }

    delete = (url: string, requestOptions: ObjectLiteral = {}): Promise<XMLHttpRequest> => {
        const options = {...requestOptions, method: METHODS.DELETE};
        return this.request(`${this.BASE_URL}${url}`, options);
    }

    request = (url: string,
        options: Options = {method: METHODS.GET, timeout: 5000}): Promise<XMLHttpRequest> => {
        const {
            method,
            data,
            timeout,
            headers = {},
        } = options;

        return new Promise((resolve, reject) => {
            const xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open(method, url);

            xhr.onerror = reject;
            xhr.onabort = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            Object.entries(headers)
                .forEach(([key, value]: [string, string]) => {
                    xhr.setRequestHeader(key, value);
                });

            xhr.onload = () => {
                const {
                    status,
                    response,
                } = xhr;

                if (status >= 200 && status < 300) {
                    resolve(response);
                } else {
                    reject(response);
                }
            };

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

export default HTTPTransport;
