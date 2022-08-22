const express = require("express");
const {
  product,
  inserproduct,
  getbyid,
  delproduct,
  updateparoduct,
} = require("../controller/usercontroller");
const router = express.Router();

router.get("/productbyid/:id", getbyid);
router.get("/getproduct", product);

router.post("/addproduct", inserproduct);

router.delete("/delproduct/:id", delproduct);

router.patch("/updateproduct/:id", updateparoduct);

module.exports = router;
