const http = require('http');

const routes = {
    '/contact:get': (request, response) => {
        response.write('contact us page');
        return response.end();
    },

    deafult: (request, response) => {
        response.write('Hello World!');
        return response.end();
    },
};

const handler = (request, response) => {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.deafult
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)
};

const app = http.createServer(handler).listen(3000, () => {
    console.log('app running at http://localhost:3000/');
});

module.exports = app;
