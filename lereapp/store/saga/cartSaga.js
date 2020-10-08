import { all, call, takeLatest, put } from "redux-saga/effects";
import { clearCart, addItemToCartSuccess } from "../action/cart_actions";
import { SIGN_OUT_SUCCESS, ADD_ITEM_CART } from "../types";
import { addItemToCart, totalCart } from "../reducers/cart_uitls";
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* cartSagas() {
  yield all([takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)]);

}

export default cartSagas;
