import axios from "axios";


export const getAllProducts = () => async (dispatch) => {
  try {
      const response= await axios.get('http://localhost:2000/product')
      dispatch({})
  } catch (error) {}
};
