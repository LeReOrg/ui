import { HYDRATE } from "next-redux-wrapper";
import {  GET_PRODUCT_SUCCESS } from "../types";
const initialState = {
  products: [],
};
export default function productCategories(state = initialState, action) {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          products : [...action.data],
        };
      default:
        return state;
    }
  }