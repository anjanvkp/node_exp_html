var router = require('express').Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/login.html'));
});

router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/pages/home.html'));
});

module.exports = router;