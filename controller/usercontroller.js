var user = require("../model/user");
const inseruser = (req, res) => {
  console.log(req.body);
  user.useradd(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
};
const getalluser=(req,res)=>{
user.getalluser(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
};
const userlogin=(req,res)=>{
    user.userLogin(function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    };
module.exports = { inseruser,getalluser,userlogin};
