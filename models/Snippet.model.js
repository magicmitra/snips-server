const fs = require('fs').promises;
const path = require('path');

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
exports.insert = async (newSnippet) => {
    /**
     * Grab data from newSnippet (validate)
     * make newSnippet a proper object
     */
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
        console.log('error');
        throw err;
    }
};

/* Update */

/* Delete */