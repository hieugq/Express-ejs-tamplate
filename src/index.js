const express = require('express');
let app = express();

const route = require('./routes');

route(app);

app.listen(3000, ()=>console.log('Server is listening...'));