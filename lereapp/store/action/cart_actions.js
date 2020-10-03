import {
  ADD_ITEM_CART,
  CLEAR_ITEM_CART,
  CLEAR_CART,
} from "./types";
export const addItem = (item) => ({
  type: ADD_ITEM_CART,
  payload: item,
});
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_CART,
  payload: item,
});
export const clearCart = () => ({
  type: CLEAR_CART,
});