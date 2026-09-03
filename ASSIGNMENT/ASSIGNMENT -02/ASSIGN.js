// crud operation on json file 

const http = require('http');
const fs = require('fs');
const userdata = [

];
const server = http.createServer((req, res) => {
    if (req.url === '/create' && req.method === 'GET') {
        fs.writeFile('data.json', JSON.stringify(userdata), (err, data) => {
            if (err) {

                res.end('Internal Server Error');
            } else {

                res.end('file created successfully');
            }
        });
    }
    else if (req.url === '/add' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newData = JSON.parse(body);
            userdata.push(newData);
            res.end('Data added successfully');
        });
    }

    else if (req.url === '/read' && req.method === 'GET') { 
        res.end(JSON.stringify(userdata));
    }

    else if(req.url.startswith('/update/') && req.method === 'POST') {
        const index = parseInt(req.url.split('/')[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedData = JSON.parse(body);
            if (index >= 0 && index < userdata.length) {
                userdata[index] = updatedData;
                res.end('Data updated successfully');
            } else {
                res.statusCode = 404;
                res.end('User not found');
            }
        });
    }
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});





