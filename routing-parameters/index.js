const express = require('express');
const app = express(); //returns obj of type express; by convention we call it app.

app.get('/', (req, res) => {
    res.send('Hello Express!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
})

app.get('/api/query-params/:year/:month', (req, res) => {
    res.send(req.query); //query parameters are stored in an obj with key value pairs
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


//?param1=val1  === query parameters - we use it for additional data like sortBy=name - option
//routing params for required values