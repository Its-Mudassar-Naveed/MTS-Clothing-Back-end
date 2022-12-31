const mongoose = require('mongoose');


let productsSchema =new mongoose.Schema (
    {
      productName:String,
      productDesc:String,
      price:Number
    }
)
const Product = new mongoose.model("Product",productsSchema)

module.exports = Product;