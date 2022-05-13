import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductAction.js";
import CarDetail from "../CarDetail/CarDetail";

function FindCar() {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      {products &&
        products.map((elt) => <CarDetail key={elt._id} product={elt} />)}
    </div>
  );
}

export default FindCar;
