var express = require('express');
var router = express.Router();

router.get('/api', function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send({greeting:'Hello Rect x Node.js'})
    res.send(data);
});

module.exports = router;
