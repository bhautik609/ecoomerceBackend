var db=require('../dbconnection');
var user={
    getalluser:function(callback){
          return db.query('select * from user',callback);
    },
    userLogin:function(callback){
        return db.query('select * from user where user_email=? and user_password=?',[data.login_username,data.login_password],callback)
    },
    useradd:function(data,callback){
        console.log(data);
        return db.query('insert into product values(?,?,?,?,?,?,?,?,?)',[null,data.user_name,data.user_lname,data.user_email,data.user_gender,data.user_password,data.user_address,data.user_type,data.user_img],callback);
    }
}
module.exports=user;