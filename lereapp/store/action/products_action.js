import {
    GET_PRODUCT_SUCCESS,
    GET_TOP_PRODUCT,
    GET_PRODUCT_BY_CATEGORY,
  } from "../types.js";
  
  export function getTopProductSuccess(data) {
      return {
        type: GET_PRODUCT_SUCCESS,
        data,
      }
  }
  export function getTopProduct() {
      return { type: GET_TOP_PRODUCT }
  }
  export function getProductByCategory(params) {
  
    return { type: GET_PRODUCT_BY_CATEGORY,params: params };
  }