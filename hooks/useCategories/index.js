import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const getCategories = () =>
  axios.get(`${config.api}/categories`).then((res) => res.data);
  
const useCategories = () => {
  return useQuery("categories", getCategories);
};

export { useCategories, getCategories };