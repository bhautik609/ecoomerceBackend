var db=require('../dbconnection');
var product={
    getallproduct:function(callback){
          return db.query('select * from product',callback);
    },
    insertproduct:function(data,callback){
        console.log(data);
        return db.query('insert into product values(?,?,?,?)',[null,data.product_name,data.product_color,data.product_price],callback);
        //return db.query("INSERT INTO product (product_id, product_name,product_color,product_price) VALUES (null,data.product_name,data.prdouct_color,data.product_price)",callback)
    },
    getproductId:function(id,callback){
        //console.log(id);
        return db.query('select * from product where product_id=?',[id],callback);
    },
    delproduct:function(id,callback){
        return db.query('delete from product where product_id=?',[id],callback);
    },
    editproduct:function(id,data,callback){
        console.log(id);
        return db.query('update product set product_name=?,product_color=?,product_price=?  where product_id=?',[data.product_name,data.product_color,data.product_price,id],callback); 
    }
}
module.exports=product;