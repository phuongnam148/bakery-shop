const category = require("../models/Category");
var modelUsers = require("../models/User");
const db = require("../../config/db/mysql.js");

const bcrypt = require("bcrypt");
class LoginController {
    // [GET] /product/:slug
    async login(req, res, next) {

    }
    async changepass(req, res, next) {


    }
    postAddUser(req, res) {
        let data = req.body;
        modelUsers.create(data, function () {
            res.json({ thongbao: "Đã thêm  xong một user mới" });
        });
    }
    p_changepass(req, res) {
        let data = req.body.password;
        console.log(data);
        let sql = "UPDATE users SET password = ? WHERE username = ?";
        var salt = bcrypt.genSaltSync(10);
        data = bcrypt.hashSync(data, salt);
        db.query(sql, [data, req.session.username], (err, d) => {
            if (err) throw err;
            res.send('<script>alert("Đổi mật khẩu thành công");window.location.href = "/home";</script> ');
        });
    }
    logout(req, res) {
        req.session.destroy();
        res.redirect("/home");
    }
    async postLogin(req, res) {
        let u = req.body.username;
        let p = req.body.password;

        let sql = "SELECT * FROM users WHERE username = ?";
        db.query(sql, [u], (err, rows) => {
            if (rows.length <= 0) {
                res.redirect("/login/ufail");
                return;
            }
            console.log("username ok");
            let user = rows[0];
            let pass_fromdb = user.password;
            console.log(pass_fromdb);

            // console.log(pass_fromdb);
            var kq = bcrypt.compareSync(p, pass_fromdb);
            if (kq) {
                console.log("OK");
                var sess = req.session; //initialize session variable
                sess.daDangNhap = true;
                sess.username = user.username;
                //res.redirect("/thanhvien/thanhcong");
                if (sess.back) {
                    console.log(sess.back);
                    res.redirect(sess.back);
                } else {
                    res.redirect("/home");
                }
            } else {
                console.log("pass not OK");
                res.redirect("/login/pfail");
            }
        });
    }
}
module.exports = new LoginController();
  // export default new SiteController;
