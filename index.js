const Snippet = require('./models/Snippet.model');

async function testModels() {
    const snippets = await Snippet.select({ author: 'Scott', language: 'javascript' });
    console.log(snippets);
}

testModels();