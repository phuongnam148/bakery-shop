const db = require("../../config/db");

var Category = {
  getData: async (qr) => {
    const data = await db.execute(qr);
    return data
  },
  getAllCat: async () => {
    const data = await db.execute("Select * from category");
    return data
  },
  getCatById: async (id) => {
    const data = await db.execute(`select * from category where id=${id}`);
    return data
  },
  addCat: async (Cat) => {
    const data = await db.execute("Insert into category(name) values(?)", [Cat.name]);
    return data
  },
  deleteCat: async (id) => {
    const data = await db.execute("delete from category where id=?", [id]);
    return data;
  },
  // updateBook:function(id,book,callback){
  // 	return db.query("update books set tenSach=?,moTa=?,urlHinh=?,capNhap=?,gia=?,idLoai=?,anHien=? where id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
  // }
};
module.exports = Category;
