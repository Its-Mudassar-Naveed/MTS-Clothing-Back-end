const mongoose = require('mongoose');


let productsSchema =new mongoose.Schema (
    {
      productName:String,
      productDesc:String,
      price:Number,
      filename: {
        type: String,
        required: true
      },
      data: {
        type: Buffer,
        required: true
      }
    }
)

try {
  mongoose.connect('mongodb://localhost:27017/Product', {useNewUrlParser: true});
  console.log("Connection Created TO db");
} catch (error) {
  console.log(error)
}
const Product = new mongoose.model("Product",productsSchema)

module.exports = Product;