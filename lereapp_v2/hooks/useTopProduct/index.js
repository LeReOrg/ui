import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
const getTopProducts = () =>
  axios.get(`${config.api}/product/getTopProduct`).then((res) => res.data);
const useTopProducts = () => {
  return useQuery("topProduct", getTopProducts);
};

export { useTopProducts, getTopProducts };
