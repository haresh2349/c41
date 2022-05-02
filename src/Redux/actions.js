// use axios for api call
import axios from "axios";
import { GET_DATA, SRT } from "./actionTypes";

function getProductsData(dispatch) {
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) => {
      dispatch({
        type: GET_DATA,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

const sortProducts = (value) => {
  return {
    type: SRT,
    payload: value,
  };
};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
