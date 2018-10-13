const express = require('express');
const app = express(); //returns obj of type express; by convention we call it app.

app.get('/', (req, res) => {
    res.send('Hello Express!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})

app.listen(3000, () => console.log('Listening on port 3000...'))