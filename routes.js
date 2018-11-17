const Product = require("./models/Product"); //Requerimos el modelo de los productos
const express = require('express');
const router = express.Router();

//Routes
router.get('/products' ,async (req,res) => {
  const allProducts =  await Product.find({});
  res.json(allProducts);
});

module.exports = router;