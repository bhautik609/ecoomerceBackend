const mysql=require('mysql');

var connection = mysql.createConnection({
    host: "bvh3bm3dsmukj9dikwx8-mysql.services.clever-cloud.com",
    user: "utmlfddxh77a3fxq",
    password: "KmjlbTwpne7227vRDCnC",
    database: "bvh3bm3dsmukj9dikwx8",
    port: 3306,
    
  });
  // fdkjsdbfsd
  connection.connect(err => {
    if (!err) {
      console.log("DB Connection Succeeded");
    } else {
      console.log("DB Connection Failed",err);
    }
  });
  
  module.exports = connection;