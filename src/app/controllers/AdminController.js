const product = require("../models/Product");
const category = require("../models/Category");

const formidable = require("formidable");
class AdminController {
  // [GET] /news
  index(req, res) {
    res.render("admin", { layout: "./layouts/admin" });
  }

  // [GET] /news
  addProd(req, res) {
    category.getAllCat().then(([rows]) => {
      res.render("addProd", { categorys: rows, layout: "./layouts/admin" });
    });
  }

  deleteProd(req, res) {
    product.deleteProd(req.params.slug).then(([rows]) => {
      res.redirect("/admin/listProd/deleted");
    });
  }

  async listProd(req, res) {
    const allPromise = Promise.all([
      product.getAllProd(),
      category.getAllCat(),
    ]);
    try {
      const [[prod_rows], [cat_rows]] = await allPromise;
      res.render("listProd", {
        products: prod_rows,
        categorys: cat_rows,
        noti: req.params.slug,
        layout: "./layouts/admin"
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }

  async updateProd(req, res) {
    const allPromise = Promise.all([
      product.getProdById(req.params.slug),
      category.getAllCat(),
    ]);
    try {
      const [[prod_rows], [cat_rows]] = await allPromise;
      res.render("updateProd", {
        product: prod_rows[0],
        categorys: cat_rows,
        layout: "./layouts/admin"
      });
    } catch (error) {
      res.json(error); // rejectReason of any first rejected promise
    }
  }

  post_product(req, res) {
    // var date = new Date()
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let tensp = fields.name;
      let giasp = fields.price;
      let cat_id = fields.idCat;
      let motasp = fields.detail;
      let imgURL = fields.imgURL;
      // console.log(destPath)
      var prod = {
        name: tensp,
        price: giasp,
        cat_id: cat_id,
        detail: motasp,
        imgURL: imgURL,
        updateAt: Date.now()
      };
      console.log(prod);
      product.addProd(prod).then(() => {
        res.redirect("/admin/listProd");
      }).catch(err => {
        res.json(err)
      })
        ;
      // alert('Thêm sản phẩm thành công')
    });
  }
  post_update_product(req, res) {
    // var date = new Date()
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let tensp = fields.name;
      let giasp = fields.price;
      let cat_id = fields.idCat;
      let motasp = fields.detail;
      let imgURL = fields.imgURL;
      // console.log(destPath)
      var prod = {
        name: tensp,
        price: giasp,
        cat_id: cat_id,
        detail: motasp,
        imgURL: imgURL,
        id: req.params.slug,
      };
      // console.log(prod);
      product.updateProd(prod).then(() => {
        res.redirect("/admin/listProd/updated");
      }).catch(err => {
        res.json(err)
      })
        ;
      // alert('Thêm sản phẩm thành công')
    });
  }
}

module.exports = new AdminController();
// export default new NewsController;
