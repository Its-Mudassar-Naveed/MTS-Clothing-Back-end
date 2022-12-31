const Product = require("../Models/productModel")

module.exports = AllProducts = async (req,res)=>
{
    const allProducts = Product.find().then((resolve,reject)=>{
    res.status(200).send(resolve)

    console.log(resolve)  })
}

module.exports = AddProduct = async(req,res)=>
{
    const users =  req.body;
    const userId = uuidv4();
    const userWithId ={ ...users, id : userId}
    const newProduct = new Product(userWithId)
    try{
      newProduct.save()
      .then(()=>res.status(200).json(newProduct));
    }catch(error){
      response.status(409).json({message: error.message})
    }

};