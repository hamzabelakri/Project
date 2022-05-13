import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {getAllProducts} from "../../Redux/Actions/ProductAction.js";
 import CarDetail from "../CarDetail/CarDetail" 
 
 



function FindCar() {
  const {products}= useSelector((state) => state.ProductReducer);
  console.log(products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts())
  })
  return (
    <div>{
      products.length>0 && products.map((elt)=>(<CarDetail key={elt._id } product={elt}/>))}</div>
  )
}

export default FindCar
