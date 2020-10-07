import { HYDRATE } from "next-redux-wrapper";
import {  LOAD_DATA_SUCCESS } from "../types";
const initialState = {
  categories: [],
};
export default function categoriesRoot(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        categories : [...action.data],
      };
    default:
      return state;
  }
}
