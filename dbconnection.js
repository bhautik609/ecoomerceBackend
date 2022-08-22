const mysql=require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhautik@123",
    database: "ecommerce",
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