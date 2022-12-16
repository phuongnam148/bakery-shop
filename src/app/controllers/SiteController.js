const product = require("../models/Product");
const category = require("../models/Category");

// const { multipleToObj } = require('../../util/mongoose');

class SiteController {
  // [GET] /
  async home(req, res, next) {
    const allPromise = Promise.all([
      product.getNumberProd(6),
      category.getAllCat(),
    ]);
    try {
      const [[prod_rows], [cat_rows]] = await allPromise;

      res.render("home", {
        products: prod_rows,
        category: cat_rows,
        un: req.session.username,
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }

  async cart(req, res, next) {
    const allPromise = Promise.all([
      product.getNumberProd(6),
      category.getAllCat(),
      
    ]);
    try {
      const [[prod_rows], [cat_rows]] = await allPromise;
      res.render("cart", {
        products: prod_rows,
        category: cat_rows,
        un: req.session.username,
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }

}

module.exports = new SiteController();
// export default new SiteController;
