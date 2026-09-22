import http  from 'http'
const cors =require('cors')



const userdata = [{
    name: 'DEEPAK',
    age: 30
}];

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

    else if (url === '/create' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newData = JSON.parse(body);

            const newUserData = {
                name: newData.name,
                age: newData.age
            };
            userdata.push(newUserData);

            res.end('Data updated successfully');

        });
    }
    else if (url.startsWith('/users/') && method === 'GET') {
        const index = parseInt(url.split('/')[2]);
        if (index >= 0 && index < userdata.length) {
            res.end(JSON.stringify(userdata[index]));
        }
        else {
            res.statusCode = 404;
            res.end('User not found');
        }

    }


    else if (url.startsWith('/update/') && method === 'PUT') {
        const index = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedData = JSON.parse(body);

            const newUserData = {

                age: updatedData.age
            };

            userdata[index].age = newUserData.age;
            res.end('Data updated successfully');
        });
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
