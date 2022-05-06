const express=require('express');
const router=express.Router();
const {getAllProducts,addProduct,updateProduct,deleteProduct}=require('../Controllers/productController')

router.get('/', getAllProducts);
router.post('/',isAuth, addProduct);
router.put('/',isAuth, updateProduct);
router.delete('/:id',isAuth, deleteProduct);

module.exports = router;
