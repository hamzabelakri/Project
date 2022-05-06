const Product = require("../Models/Product.js");



const getAllProducts = async(req, res) => {

    try {
        const products=await Product.find()
        res.json({products:products})
    } catch (error) {
        res.json({msg:"failed to get product"})
    }
}
module.exports={getAllProducts}