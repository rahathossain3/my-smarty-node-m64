const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello From my over personal Smarty Smarty Pant !! with auto restart")
});

// custom api

const users = [
    { id: 1, name: 'Sabana', email: 'samaba@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Sucharita', email: 'Sucharita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 5, name: 'sarabonti', email: 'sarabonti@gmail.com', phone: '01788888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '01788888888' },
]

// get full api data
app.get('/users', (req, res) => {
    res.send(users)
})

// dynamic single api data find
app.get('/user/:id', (req, res) => {
    console.log(req.params);

    //-------- for == 
    // const id = req.params.id;

    // const user = users[id];
    // const user = users.find(u => u.id == id);


    //------ for ===
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    // response send
    res.send(user);
})



app.listen(port, () => {
    console.log('Listening to Port is ', port)
})