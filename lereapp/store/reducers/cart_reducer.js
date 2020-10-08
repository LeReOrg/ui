import {
  ADD_ITEM_CART_SUCCESS,
  ADD_ITEM_CART,CLEAR_ITEM_CART,
  CLEAR_CART,
} from "../types";
import { HYDRATE } from "next-redux-wrapper";
import { addItemToCart, removeItemFromCart, totalCart } from "./cart_uitls";

const INITIAL_STATE = {
  cartItems: [],
  cartTotal : 0
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        cartTotal : totalCart(state.cartTotal),
      };
    // case CartActionTypes.CLEAR_ITEM_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(
    //       (cartItem) => cartItem.id !== action.payload.id
    //     ),
    //   };
    // case CartActionTypes.REMOVE_ITEM:
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCart(state.cartItems, action.payload),
    //   };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
export default cartReducer;