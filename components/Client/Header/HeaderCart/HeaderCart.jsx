import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import styles from "./HeaderCartStyled";
import { cartTotalItem } from "../../../../lib/recoil-root";
import { useRecoilValue } from "recoil";
import AddProductModal from "../../Modal/AddProductModal";
const HeaderCart = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const totalItem = useRecoilValue(cartTotalItem);
  return (
    <div className={classes.header_cart_container}>
      <Link href="/cart">
        <a>
          <div className={classes.header_cart_main}>
            <div className={classes.header_cart_icon}></div>
            <div className={classes.header_cart_countItem}>({totalItem})</div>
          </div>
        </a>
      </Link>
      <AddProductModal />
    </div>
  );
};
export default HeaderCart;
