import {
  LOAD_DATA_SUCCESS,
  GET_CATEGORIES,
} from "../types";

export function loadDataSuccess(data) {
    return {
      type: LOAD_DATA_SUCCESS,
      data,
    }
}
export function getCategories() {
    return { type: GET_CATEGORIES }
}
