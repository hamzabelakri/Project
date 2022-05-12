import axios from "axios";
import {GET_ALL_PRODUCTS} from "../Types"

export const getAllProducts = () => async (dispatch) => {
  try {
      const response= await axios.get('http://localhost:2000/product/')
      
      dispatch({type:GET_ALL_PRODUCTS,payload:response.data.products})
  } catch (error) { 
    alert(error);
  }
};
