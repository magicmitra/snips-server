const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('snips');
});

/* Snippets routes */
// POST snippets
app.post('/api/snippets', (req, res) => {

});

// GET snippets
app.get('/api/snippets', (req, res) => {

});

// PATCH snippets/:id
app.patch('/api/snippets/:id', (req, res) => {

});

// DELETE snippets/:id
app.delete('/api/snippets/:id', (req, res) => {

});

app.listen(5000, () => { console.log('server running on port 5000') });

// SHIFT + ALT + F to use prettier