const Snippet = require('./models/Snippet.model');

async function testModels() {
    // const snippets = await Snippet.select({ author: 'Scott', language: 'javascript' });
    // console.log(snippets);
    try {
        const snip = await Snippet.insert({ 
            author: 'Fucker Jones', 
            code: 'code',
            title: 'test.txt',
            description: 'bruh damn',
            language: 'english',
        });
        console.log(snip);
    } catch(err) {
        console.log(err);
    }
}

testModels();

// SHIFT + ALT + F to use prettier