var product = require("../models/Product");
var categorys = require("../models/Category");

class API {
  getMostBuyProd(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    let qr = `Select * from products order by buy_count desc limit 6`;
    product.getQR(qr).then(([prod]) => {
      res.json(prod);
    });
  }
  getProdById(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    
    product.getProdById(req.params.slug).then(([prod]) => {
      res.json(prod);
    });
  }
  getMostViewProd(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    let qr = `Select * from products order by view_count desc limit 6`;
    product.getQR(qr).then(([prod]) => {
      res.json(prod);
    });
  }

  getNewestProd(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    let qr = `Select * from products order by create_at desc limit 6`;
    product.getQR(qr).then(([prod]) => {
      res.json(prod);
    });
  }

  getNumberProd(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    product.getNumberProd(req.params.slug).then(([prod]) => {
      res.json(prod);
    });
  }

  getAllProd(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    product.getAllProd().then(([prod]) => {
      res.json(prod);
    });
  }

  getProdByCatID(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    product.getProdByCatID(req.params.slug).then(([prod]) => {
      res.json(prod);
    });
  }
  getAllCat(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    categorys.getAllCat().then(([cate]) => {
      res.json(cate);
    });
  }

  getCateByID(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    categorys.getCatById(req.params.slug).then(([cate]) => {
      res.json(cate);
    });
  }

  postCate(req, res) {
    let data = req.body;

    categorys
      .addCat(data)
      .then(([rows]) => {
        res.json({ thongbao: "Đã thêm sách" });
      })
      .catch((err) => {
        throw err;
      });
  }

  updateCate(req, res) {
    let data = req.body;
    let id = req.params.slug;
    let sql = "UPDATE category SET ? WHERE id = ?";
    db.query(sql, [data, id], (err, d) => {
      if (err) throw err;
      res.json({ thongbao: "Đã cập nhật sách" });
    });
  }

  deleteCate(req, res) {
    let id = req.params.slug;
    let sql = "DELETE FROM category WHERE id = ?";
    db.query(sql, id, (err, d) => {
      if (err) throw err;
      res.json({ thongbao: "Đã xóa thành công" });
    });
  }
}
module.exports = new API();
