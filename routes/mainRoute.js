const router = require('express').Router();
const snipController = require('../controllers/snippetsController');

router.get('/', (req, res) => {
    res.send('snips');
});

/* Snippets routes */
// POST snippets
router.post('/api/snippets', snipController.createSnippet);

// GET snippets
router.get('/api/snippets', snipController.readSnippet);
router.get('/api/snippets/:id', snipController.getSnippetById);

// PATCH snippets/:id
router.patch('/api/snippets/:id', snipController.updateSnippet);

// DELETE snippets/:id
router.delete('/api/snippets/:id', snipController.deleteSnippet);

module.exports = router;