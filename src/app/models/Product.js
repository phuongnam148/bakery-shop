const db = require("../../config/db");

var Product = {
  getQR: async (qr) => {
    const data = await db.execute(qr)
    return data;
  },
  getAllProd: async () => {
    const data = await db.execute('Select * from products')
    return data;
  },
  getNumberProd: async (num) => {
    const data = await db.execute(`Select * from products limit ${num}`);
    return data;
  },
  getProdById: async (id) => {
    const data = await db.execute(`select * from products where id=${id}`);
    return data;
  },
  getNumberProdByCatId: async (catID, num) => {
    const data = await db.execute(`select * from products where cat_id=${catID} limit ${num}`);
    return data;
  },
  getProdByCatID: async (catID) => {
    const data = await db.execute(`select * from products where cat_id=${catID}`);
    return data;
  },
  addProd: async (prod) => {
    const data = await db.execute(`Insert into products(name,price,imgURL,detail,cat_id)
     values(${prod.name},${prod.price},${prod.imgURL},${prod.detail},${prod.cat_id})`
    );
    return data;
  },
  deleteProd: async (id) => {
    const data = await db.execute(`delete from products where id=${id}`);
    return data
  },

  updateProd: async (prod) => {
    const data = await db.execute(`update products 
    set name= '${prod.name}',price= ${prod.price},imgURL= '${prod.imgURL}',detail= '${prod.detail}',cat_id= ${prod.cat_id} 
    where id =${prod.id};`);
    return data;
  }
};



module.exports = Product;
