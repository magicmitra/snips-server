const express = require('express');
const cors = require('cors');
const mainRoute = require('./routes/mainRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(mainRoute); // router

app.listen(5000, () => { console.log('server running on port 5000') });

// SHIFT + ALT + F to use prettier