const db = require("../../config/db/");
const bcrypt = require("bcrypt");

exports.list = function (callback) {
  let sql = `SELECT *  FROM users`;
  db.query(sql, function (err, d) {
    callback(d);
  });
};
exports.create = function (data, callback) {
  //hàm chèn user mới vào table
  var salt = bcrypt.genSaltSync(10);
  data.password = bcrypt.hashSync(data.password, salt);
  let sql = "INSERT INTO users SET ?";
  db.query(sql, data, function (err, d) {
    callback(d);
  });
};
exports.update = function (id, data, callback) {
  let sql = "UPDATE users  SET ? WHERE idUser = ?";
  var salt = bcrypt.genSaltSync(10);
  data.password = bcrypt.hashSync(data.password, salt);
  db.query(sql, [data, id], (err, d) => {
    if (err) throw err;
    callback();
  });
};
exports.read = function (id, callback) {
  let sql = "SELECT * FROM users WHERE idUser = ?";
  db.query(sql, id, (err, d) => {
    data = d[0];
    callback(data);
  });
};

exports.delete = function (id, callback) {
  let sql = "Delete FROM users WHERE idUser = ?";
  return db.query(sql, id, (err, d) => {
    if (err) throw err;
    callback();
  });
};

exports.login = function (username, callback) {
  let sql = "SELECT * FROM users WHERE username = ?";
  return db.query(sql, [username], (err, d) => {
    if (err) throw err;
    callback();
  });
};
