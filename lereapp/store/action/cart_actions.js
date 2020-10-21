import {
  ADD_ITEM_CART,
  CLEAR_ITEM_CART,
  CLEAR_CART,
  ADD_ITEM_CART_SUCCESS,
  REMOVE_ITEM_CART,
} from "../types";
export const addItem = (item) => ({
  type: ADD_ITEM_CART,
  payload: item,
});
export const addItemToCartSuccess = (data) => ({
  type: ADD_ITEM_CART_SUCCESS,
  data,
});
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_CART,
  payload: item,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});
export const removeItem = (item) => ({
  type: REMOVE_ITEM_CART,
  payload: item,
});
