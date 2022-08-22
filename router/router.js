const express = require("express");
const {
  product,
  inserproduct,
  getbyid,
  delproduct,
  updateparoduct,
} = require("../controller/productcontroller");
const { getalluser, userlogin, inseruser } = require("../controller/usercontroller");
const router = express.Router();

router.get("/productbyid/:id", getbyid);
router.get("/getproduct", product);
router.post("/addproduct", inserproduct);
router.delete("/delproduct/:id", delproduct);
router.patch("/updateproduct/:id", updateparoduct);


//userroute
router.get("/getuser",getalluser);
router.get("/loginuser",userlogin);
router.get("/loginuser",inseruser);
module.exports = router;
