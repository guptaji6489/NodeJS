var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    var query = 'select * from student1';
    connection.query(query,function(err,rows,fields){
        if(err) throw err;
        // res.json(rows);
        res.render('product', { title: 'product',product:rows });
});
    })
  



module.exports = router;
