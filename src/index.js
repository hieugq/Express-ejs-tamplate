const express = require('express');
const route = require('./routes');
const path = require('path');

let app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'sources/views'));
route(app);

app.listen(3000, ()=>console.log('Server is listening...'));