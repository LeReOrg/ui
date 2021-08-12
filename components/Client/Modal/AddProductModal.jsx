import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { showModalAddProductState } from "../../../lib/recoil-root";
import { makeStyles } from "@material-ui/core/styles";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import styles from "./ModalStyled";
import Link from "next/link";
const AddProductModal = () => {
  const [showModalAddCart, setShowModalAddCart] = useRecoilState(
    showModalAddProductState
  );
  const [test, setTest] = useState(false);
  useEffect(() => {
    if (showModalAddCart) {
      setTest(true);
    }
  }, [showModalAddCart]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (test) {
      setShowModalAddCart(false);
    }
  };
  return (
    <>
      {showModalAddCart && (
        <ClickAwayListener onClickAway={(e) => handleClose(e)}>
          <div>
            <div className={classes.addProductModalContainer}>
              <a className={classes.closeButton} onClick={handleClose}>
                <CloseOutlinedIcon />
              </a>
              <p className={classes.statusModal}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                Thêm vào giỏ hàng thành công!
              </p>
              <Link href="/cart">
                <a className={classes.buttonViewCart}>
                  Xem giỏ hàng và thanh toán
                </a>
              </Link>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};
export default AddProductModal;
