var express = require('express');
var router = express.Router();
var db = require('../db');
var helpers = require('../helpers');
var errors = [];

router.get('/products', helpers.loginChecker, function (req, res, next) {

  res.render('products', {
    title: 'Products'
  });

});

router.post('/products', helpers.loginChecker, function (req, res, next) {
console.log("Entered products post method");
 
  var sqlQuery = `INSERT INTO products VALUES(NULL, ?)`;

  var values = [req.body.product_name];
  console.log(values);

  db.query(sqlQuery, values, function (err, results, fields) {

    if (err) {
      errors.push(err.message);
      next();
      return;
    }

    if (results.affectedRows == 1) {
      console.log("results.affectedRows" + results.affectedRows);
      res.redirect('/List');
      return;
    } else {
      errors.push(err.message);
      next();
    }

  });

});

router.post('/products', function (req, res, next) {

  res.statusCode = 401;

  res.render('products', {
    title: 'Products',
    messages: errors
  });

  errors = [];

});

router.get('/List', helpers.loginChecker, function (req, res, next) {

  var sqlQuery = `SELECT * FROM products`;

  db.query(sqlQuery, function (err, results, fields) {

    res.render('List', {
      title: 'Register - Products',
      authorised: req.session.authorised,
      //fname: req.session.fname,
      products: results
    });

  });

  });

router.post('/List', function (req, res, next) {



  var sqlQuery = `SELECT * FROM products)`;
  var values = [req.body.product_name];

  db.query(sqlQuery, values, function (err, results, fields) {

    if (err) {
      errors.push(err.message);
      next();
      return;
    }

    if (results.length == 1) {
      req.session.authorised = true;
     res.redirect('/List');
      return;
    } 

  });



});



router.get('/exit', function (req, res, next) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

});

module.exports = router;