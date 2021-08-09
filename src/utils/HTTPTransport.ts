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
    get = (url: string, options: Options = {method: METHODS.GET, timeout: 3000}) => {
        const {data} = options;
        const queryString = `${url}${queryStringify(data)}`;
        return this.request(queryString, options);
    }

    post = (url: string,
        options = {method: METHODS.POST, data: {}}): Promise<XMLHttpRequest> => this
        .request(url, options)

    put = (url: string,
        options = {method: METHODS.PUT}): Promise<XMLHttpRequest> => this
        .request(url, options)

    delete = (url: string, options = {method: METHODS.DELETE}) => this.request(url, options)

    request = (url: string,
        options: Options = {method: METHODS.GET, timeout: 5000}): Promise<XMLHttpRequest> => {
        const {
            method,
            data = {},
            timeout,
            headers = {},
        } = options;

        return new Promise((resolve, reject) => {
            const xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onerror = reject;
            xhr.onabort = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            Object.entries(headers)
                .forEach(([key, value]: [string, string]) => {
                    xhr.setRequestHeader(key, value);
                });

            xhr.onload = () => resolve(xhr);

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
