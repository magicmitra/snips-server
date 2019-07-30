const snips = require('../models/Snippet.model');
const errorHTTPStatus = require('../utils/errorHTTPStatus');

exports.createSnippet = async (req, res) => {
    const snippet = await snips.insert(req.body);
    res.status(201).send(snippet);
};

exports.readSnippet =  async (req, res) => {
    const snippets = await snips.select();
    res.send(snippets);
};

exports.updateSnippet = async (req, res) => {
    try {
        const snippets = await snips.update(req.params.id, req.body);
        res.send(snippets);
    } catch(err) {
        res.send(err);
    }
};

exports.deleteSnippet = async (req, res) => {
    try{
        const snippets = await snips.delete(req.params.id);
        res.send(snippets);
    } catch(err) {
        res.send(err);
    }
};

exports.getSnippetById = async (req, res) => {
    try {
        console.log(req.params);
        const snip = await snips.select(req.params);
        if(snip.length === 0) {
            throw new errorHTTPStatus('ID Does not exist', 404);
    }
    res.send(snip[0]);
    } catch(err) {
        if(err instanceof errorHTTPStatus)
            res.status(err.status).send(err.message);
        else res.status(500).send('server error');
    }
};