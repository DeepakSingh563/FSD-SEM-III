const http = require('http');

const userdata = {
    name: 'DEEPAK',
    age: 30
};

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/msg' && method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Home Page');

    }
    else if (url === '/sys' && method === 'GET') {
        res.statusCode = 201;
        res.end('Welcome to the System Page');
    }
    else if (url === '/data' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(userdata));
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
