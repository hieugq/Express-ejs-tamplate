class Home {

    index(req, res){
        res.render('home', {message: "Home controller"});
    }
}

module.exports = new Home;