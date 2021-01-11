let router = require('express').Router();
const homeController = require('../app/controllers/home.controller');

router.get('/', homeController.index);

module.exports = router;