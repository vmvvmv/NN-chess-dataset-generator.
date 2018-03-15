var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(__dirname, '../html', 'index.html');
    res.send(__dirname, '../html', 'index.html');
    // res.sendFile(path.join(__dirname, '../html', 'index.html'));

});

module.exports = router;
