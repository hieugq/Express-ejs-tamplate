const homeRouter = require('./home.route');

module.exports = function route(app){
    app.use('/', homeRouter);
}