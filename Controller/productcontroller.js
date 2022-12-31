const Product = require("../Models/productModel")
const { v4: uuidv4 } = require('uuid');
const { request } = require("express");
const AllProducts = async (req,res)=>
{
    const allProducts = Product.find().then((resolve,reject)=>{
    res.status(200).send(resolve)

    console.log(resolve)  })
}

const AddProduct = async(req,res)=>
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

const DeleteProduct = async (req,res)=>
{
    //const { id } = req.params;
    Product.deleteOne({_id: request.params.id}).then((resolve,reject)=>
    {
      if(resolve){
      res.status(200).json("Product Deleted");
      console.log("deleteProduct");
    }else{
      console.log(error)
    }
    })
    // res.status(200).send(`Produc is deleted`);
    // console.log("deleted successfully hit")
}

module.exports={
    AllProducts,
    AddProduct,
    DeleteProduct
}