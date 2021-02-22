import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const useMoreProduct = (page = 0) =>
useQuery(
    ["topProduct",page],
    async () => {
      const {data} = await axios.get(`${config.api}/product/getTopProduct/${page}`);
      return data;
    }, { keepPreviousData: true }
   
  );
export { useMoreProduct };
