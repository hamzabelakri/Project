const express=require('express');
const router=express.Router();
const isAuth=require('../Midelware/Auth')
const {getAllProducts,addProduct, updateProduct, deleteProduct}=require('../Controllers/productController')

router.get('/', getAllProducts);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;
