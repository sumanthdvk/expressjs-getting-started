const express = require('express');
const app = express(); //returns obj of type express; by convention we call it app.

app.get('/', (req, res) => {
    res.send('Hello Express!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})

//use env var PORT. use process object to get the env
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`)); //use back tick to use temlate string - ${}
