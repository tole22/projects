const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('receive');
});

app.post('/', (req, res) => {
    res.send('receive post');
});

app.delete('/', (req, res) => {
    res.send('Deleting.......');
});

app.put('/', (req, res) => {
    res.send('Adding....');
});


app.listen(3000, () => {
    console.log('server on port 3000');
});