import ShoppingBag from "../../../../assets/shopping_bag.svg";
import ShoppingBagMobile from "../../../../assets/ic_shoppingbag_mobile.svg";

const styles = (theme) => ({
  header_cart_container: {
    position: "relative",
  },
  header_cart_main: {
    padding: "0 10px 0 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "none",
    [theme.breakpoints.up("md")]: {
      padding: "5px 15px",
      border: "1px solid #2FAF62",
      borderRadius: 4,
    },
    [theme.breakpoints.up("lg")]: {
      padding: "9px 23px",
    },
  },
  header_cart_icon: {
    background: `url(${ShoppingBagMobile})`,

    height: 24,
    width: 24,
    padding: 10,
    [theme.breakpoints.up("md")]: {
      background: `url(${ShoppingBag})`,
    },
  },
  header_cart_countItem: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    paddingLeft: 3,
    color: "black",
    lineHeight: "20px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 6,
      fontSize: 16,
      color: "#2FAF62",
    },
  },
});

export default styles;
