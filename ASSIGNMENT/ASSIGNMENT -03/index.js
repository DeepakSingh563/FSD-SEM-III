//update the data in file and show the updated data using serer and put request in json file
 const http = require('http');
const userdata = [];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/users' && method === 'GET') {
        res.end(JSON.stringify(userdata));
    }




    else if(url=== '/create' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newuser = JSON.parse(body);
            userdata.push(newuser);
            res.end('User created successfully');
        });
    }
    
    else if (url.startsWith('/update/') && method === 'PUT') {
        const index = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedData = JSON.parse(body);
            if (index >= 0 && index < userdata.length) {
               
                const newdata ={
                    name:updatedData.name,
                }
                userdata[index] = newdata;
                res.end('Data updated successfully');
            } else {
                res.statusCode = 404;
                res.end('User not found');
            }
        });
    }

    

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});