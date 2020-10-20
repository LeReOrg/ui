import {
  all,
  put,
  takeLatest,
} from "redux-saga/effects";
import axios from "axios";
import { GET_CATEGORIES } from "../types";
import config from "../../config";
import { loadDataSuccess } from "../action/categories_action";
function* getCategories() {
  try {
    const res = yield axios(`${config.api}/category/getCategory`);
    yield put(loadDataSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* categoriesSaga() {
  yield all([
    takeLatest(GET_CATEGORIES, getCategories),
  ]);
}
export default categoriesSaga;
