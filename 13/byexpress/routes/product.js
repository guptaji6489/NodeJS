var express = require("express");
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  var query = "select * from student1";
  db.query(query, function (err, rows, fields) {
    if (err) throw err;
    // res.json(rows);
    res.render("product", { title: "Products", product: rows });
  });
});

router.get("/create-form", function (req, res, next) {
  res.render("createform", { title: "Create Product" });
});

router.post("/create", function (req, res, next) {
  var product_name = req.body.product_name;
  var sku = req.body.sku;
  var price = req.body.price;
  var std = req.body.std;

  var sql = `INSERT INTO student1( rollno, name, city, standard) VALUES ("${product_name}", "${sku}", "${price}", "${std}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record inserted");
    res.redirect("/product");
  });
});

router.get("/edit-form/:id", function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM student1 WHERE id=${id}`;
  db.query(sql, function (err, rows, fields) {
    res.render("editform", { title: "Edit Product", product: rows[0] });
  });
});

router.post("/edit/:id", function (req, res, next) {
  var product_name = req.body.product_name;
  var sku = req.body.sku;
  var price = req.body.price;
  var id = req.params.id;
  var std = req.body.std;

  var sql = `UPDATE student1 SET rollno="${product_name}", name="${sku}", city="${price}",standard="${std}" WHERE id=${id}`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record updated!");
    res.redirect("/product");
  });
});

/*delete product*/
router.get("/delete/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  var sql = `DELETE FROM student1 WHERE id=${id}`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("record deleted!");
    res.redirect("/product");
  });
});

module.exports = router;
