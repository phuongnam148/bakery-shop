const product = require("../models/Product");
const category = require("../models/Category");



// const { multipleToObj } = require('../../util/mongoose');

class ProductController {
  // [GET] /product/:slug
  async index(req, res) {
    const allPromise = Promise.all([
      product.getProdById(req.params.slug),
      category.getAllCat(),
    ]);
    try {
      const [[main_rows], [cat_rows]] = await allPromise;
      product.getNumberProdByCatId(main_rows[0].cat_id, 4).then(([rows]) => {
        // console.log(rows);
        res.render("product_detail", {
          product: main_rows[0],
          relatives: rows,
          category: cat_rows,
          un: req.session.username,
          layout: "./layouts/product",

        });
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }

  async category(req, res) {
    let allPromise;
    if (req.params.slug == 'all') {
      allPromise = Promise.all([
        product.getAllProd(),
        category.getAllCat(),
      ])
    } else if (req.query.name) {
      allPromise = Promise.all([
        product.getQR(`SELECT * FROM products WHERE name REGEXP '${req.query.name}';`),
        category.getAllCat(),
      ])
    }
    else {
      allPromise = Promise.all([
        product.getProdByCatID(req.params.slug),
        category.getAllCat(),
      ])
    }

    try {
      const [[prod_rows], [cat_rows]] = await allPromise;
      // console.log(prod_rows)
      res.render("category", {
        products: prod_rows,
        category: cat_rows,
        relatives: null,
        search: 1,
        un: req.session.username,
        layout: "./layouts/product",
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }
}

module.exports = new ProductController();
// export default new SiteController;
