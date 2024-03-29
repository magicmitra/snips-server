const fs = require('fs').promises;
const path = require('path');
const shortid = require('shortid');
const errorHTTPStatus = require('../utils/errorHTTPStatus');

/** 
    * @typedef {Object} Snippet  
    * @property {string} id  
    * @property {string} author  
    * @property {string} code  
    * @property {string} title  
    * @property {string} description  
    * @property {string} language  
    * @property {string[]} comments  
    * @property {number} favorites 
*/ 

/* Create */
/**
 * Inserts a new snippet into the db.
 * @param {Snippet} newSnippet - the data to create the snippet with
 * @returns {Promise<Snippet>} the created snippet
 */
exports.insert = async (query) => {
    const { author, code, title, description, language } = query;
    try {
        if(!author || !code || !title || !description || !language) {
            throw Error('ERROR: must provide all parameters/properties');
        }
        // read snippets.json
        const dbpath = path.join(__dirname, '..', 'db', 'snippets.json');
        const snippets = JSON.parse(await fs.readFile(dbpath));
        snippets.push({
            id: shortid.generate(),
            author,
            code,
            title,
            description,
            language,
            comments: [],
            favorites: 0,
        });
        // write back to file
        await fs.writeFile(dbpath, JSON.stringify(snippets));
        return snippets[snippets.length - 1];
    } catch(err) {
        console.log(err);
        throw err;
    }
};

/* Read */
/** 
    * Selects snippets from database  
    * Can accept optional query objects to filter results  
    * @param {Object} [query]  
    * @returns {Promise<Snippet[]>} array of Snippet Objects  
*/ 
exports.select = async (query = {}) => {
    try {
        /**
        * 2. read file
        * 3. parse it
        * 4. return data
        */
        const dbpath = path.join(__dirname, '..', 'db', 'snippets.json');
        const snippets = await fs.readFile(dbpath);
        const parsedSnippets = JSON.parse(snippets);
        const filtered = parsedSnippets.filter(snippet => 
            Object.keys(query).every(key => query[key] === snippet[key]));
        return filtered;
    } catch(err) {
        throw new errorHTTPStatus('database error', 500);
    }
};

/* Update */
exports.update = async (id, query) => {
    try {
        // read db
        // find snippet that matches id
        // use query to set update fields
        // rewrite new object in array with updated object 
        // write back to the db
        const dbpath = path.join(__dirname, '..', 'db', 'snippets.json');
        const snippets = await fs.readFile(dbpath);
        const parsed = JSON.parse(snippets);
        const restOfArray = parsed.filter(snippet => snippet.id !== id);
        const updatedObj = parsed.filter(snippet => snippet.id === id);
        if(!updatedObj.length) {
            throw new errorHTTPStatus('ID does not exist', 400);
        }
        Object.keys(query).every(key => updatedObj[0][key] = query[key]);
        restOfArray.push(updatedObj[0]);
        await fs.writeFile(dbpath, JSON.stringify(restOfArray));
        return restOfArray;
    } catch(err) {
        console.error(err);
        throw err;
    }
};

/* Delete */
exports.delete = async (id) => {
    try {
        // read db
        // filter snippets for everything except snippet.id === id
        // write back to db
        const dbpath = path.join(__dirname, '..', 'db', 'snippets.json');
        const snippets = await fs.readFile(dbpath);
        const parsed = JSON.parse(snippets);
        const deletedSnip = parsed.filter(snippet => snippet.id === id);
        if(!deletedSnip.length) {
            throw new errorHTTPStatus('ID does not exist', 400);
        }
        const filtered = parsed.filter(snippet => snippet.id !== id); 
        await fs.writeFile(dbpath, JSON.stringify(filtered));
        return filtered;
    } catch(err) {
        console.error(err);
        throw err;
    }
};