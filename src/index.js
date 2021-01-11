const express = require('express');
const route = require('./routes');
const path = require('path');

let app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'sources/views'));
app.use(function({next}){
    console.log('middleware');
    next();
});

route(app);


app.listen(3000, ()=>console.log('Server is listening...'));