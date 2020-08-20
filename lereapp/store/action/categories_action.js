import { LOAD_DATA_SUCCESS, GET_CATEGORIES,GET_PRODUCT_BY_CATEGORY } from "./types";

export function loadDataSuccess(data) {
    return {
      type: LOAD_DATA_SUCCESS,
      data,
    }
}
export function getCategories() {
    return { type: GET_CATEGORIES }
}
export function getProductByCategory(params) {
  
  return { type: GET_PRODUCT_BY_CATEGORY,params: params };
}