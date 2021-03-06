import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});
export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.quantity * item.item.price;
    }, 0);
  },
});
export const cartTotalItem = selector({
  key: "cartTotalItem",
  get: ({ get }) => {
    const cart = get(cartState);
    let totalElement = 0;
    cart.map((item, index) => {
      totalElement += item.quantity;
    });
    return totalElement;
  },
});
export const addCart = (cart, item) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex((x) => x.id === item.id);

  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].item.quantityIncrease + item.quantityIncrease,
    };
    return newCart;
  }
  newCart.push({
    item,
    id: item.id,
    quantity: item.quantityIncrease,
  });
  return newCart;
};
export const userState = atom({
  key: "userState",
  default: "",
});