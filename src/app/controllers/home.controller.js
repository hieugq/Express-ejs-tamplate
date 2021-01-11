class Home {

    index(req, res){
        res.send('Welcom to my app');
    }
}

module.exports = new Home;