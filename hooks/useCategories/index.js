import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const getCategories = () =>
  axios.get(`${config.api}/category/getCategory`).then((res) => res.data);
  
const useCategories = () => {
  return useQuery("categories", getCategories);
};

export { useCategories, getCategories };