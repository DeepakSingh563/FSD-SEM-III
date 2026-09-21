const express = require('express');
const app = express();
app.use(express.json());

const userdata = [
    { id: 1, name: 'deepak', email: 'deepak@gmail.com' },
    { id: 2, name: 'ankit', email: 'ankit@gmail.com' }
];

app.get('/users', (req, res) => {
    res.status(200).json(userdata);
});

app.get("/msg", (req, res) => {
    res.send("Hello from express server");
});

app.post('/create', (req, res) => {
    const { name, email } = req.body;
   const newUser= {
    name,
    email
   }

    userdata.push(newUser);
    res.status(201).send("data  created successfully");
});

app.put('/edit/:id' ,(req,res) =>{

})

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
}); 