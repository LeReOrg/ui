import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryCache } from "../index";
const getProductByCategory = (categoryID) =>
  axios
    .get(`${config.api}/product/getProductByCategoryId/${categoryID}`)
    .then((res) =>  res.data );

const useProductByCategory = (id) => {
  return useQuery("productsByCategory", getProductByCategory());
};

export { useProductByCategory, getProductByCategory };
