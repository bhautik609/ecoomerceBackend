var user = require("../model/productModel");
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/user')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage});

const product = async (req,res) => {
  user.getallproduct(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
};
const inserproduct=(req,res)=>{
    console.log(req.body);
     user.insertproduct(req.body,function(err,rows){
        if (err) {
            res.json(err);
          } else {
            res.json(rows);
                }
  });
 }
const getbyid=(req,res)=>{
    console.log(req.params.id);
    user.getproductId(req.params.id,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    })
    
}
const delproduct=(req,res)=>{
    console.log(req.params.id);
    user.delproduct(req.params.id,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    })
    
}
const updateparoduct=(req,res)=>{
    console.log(req.params.id);
    user.editproduct(req.params.id,req.body,function(err,row){
        if(err){
            res.json(err);
        }
        else{
            res.json(row);
        }
    })
    
}
module.exports={product,inserproduct,getbyid,delproduct,updateparoduct};
