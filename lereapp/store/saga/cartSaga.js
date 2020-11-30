import { all, takeLatest, put } from "redux-saga/effects";
import { clearCart } from "../action/cart_actions";
import { SIGN_OUT_SUCCESS } from "../types";
export function* clearCartOnSignOut() {
  yield put(clearCart());
}
function* cartSagas() {
  yield all([takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)]);
}

export default cartSagas;
