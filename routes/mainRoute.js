const router = require('express').Router();
const snips = require('../models/Snippet.model');

router.get('/', (req, res) => {
    res.send('snips');
});

/* Snippets routes */
// POST snippets
router.post('/api/snippets', async (req, res) => {
    const snippet = await snips.insert(req.body);
    res.send(snippet);
});

// GET snippets
router.get('/api/snippets', async (req, res) => {
    const snippets = await snips.select();
    res.send(snippets);
});

// PATCH snippets/:id
router.patch('/api/snippets/:id', async (req, res) => {
    const snippets = await snips.update(req.params.id, req.body);
    res.send(snippets);
});

// DELETE snippets/:id
router.delete('/api/snippets/:id', async (req, res) => {
    const snippets = await snips.delete(req.params.id);
    res.send(snippets);
});

module.exports = router;