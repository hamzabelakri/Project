const isAdmin=require('../Midelware/isAdmin')
const express=require('express');
const router=express.Router();
const {getAllusers}=require('../Controllers/AdminController')

router.get('/',isAdmin, getAllusers)
module.exports = router