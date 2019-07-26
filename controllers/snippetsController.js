const snips = require('../models/Snippet.model');

exports.createSnippet = async (req, res) => {
    const snippet = await snips.insert(req.body);
    res.status(201).send(snippet);
};

exports.readSnippet =  async (req, res) => {
    const snippets = await snips.select();
    res.send(snippets);
};

exports.updateSnippet = async (req, res) => {
    const snippets = await snips.update(req.params.id, req.body);
    res.send(snippets);
};

exports.deleteSnippet = async (req, res) => {
    const snippets = await snips.delete(req.params.id);
    res.send(snippets);
};

exports.getSnippetById = async (req, res) => {
    console.log(req.params);
    const snip = await snips.select(req.params);
    res.send(snip[0]);
};