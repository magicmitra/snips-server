const Snippet = require('./models/Snippet.model');

async function testModels() {
    // SELECT
    // const snippets = await Snippet.select({ author: 'Scott', language: 'javascript' });
    // console.log(snippets);
    // INSERT
    // try {
    //     const snip = await Snippet.insert({ 
    //         author: 'Fucker Jones', 
    //         code: 'code',
    //         title: 'test.txt',
    //         description: 'bruh damn',
    //         language: 'english',
    //     });
    //     console.log(snip);
    // } catch(err) {
    //     console.log(err);
    // }
    // DELETE
    // try{
    //     const snip = await Snippet.delete("BT_o8Zxm5");
    //     console.log(snip);
    // } catch(err) {
    //     console.log(err);
    // }
    // UPDATE
    try {
        const snip = await Snippet.update('1', {
            author: 'Maney Mayne',
            language: 'Ruby on Rails',
        });
        console.log(snip);
    } catch(err) {
        console.log(err);
    }
}

testModels();

// SHIFT + ALT + F to use prettier