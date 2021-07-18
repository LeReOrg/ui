import React from "react";
import { Box } from "@material-ui/core";
import styles from "../styles/AddressItemStyled";
import { makeStyles } from "@material-ui/styles";

const AddressItem = ({ item }) => {
  const useStyled = makeStyles(styles);
  console.log(item);
  const classes = useStyled();
  return (
    <Box className={classes.addressItemContainer}>
      <Box className={classes.addressItemName}>{item.fullName}</Box>
      <Box className={classes.addressItemAddress}>
        Địa chỉ: {item.street},{item.ward},{item.district}
        {item.province}
      </Box>
      <Box className={classes.addressItemTelephone}>
        Điện thoại: {item.phoneNumber}
      </Box>
      <Box className={classes.addressItemAction}>
        <Box className={classes.addressItemAction1}>Giao đến địa chỉ này</Box>
        <Box className={classes.addressItemAction2}>Sửa</Box>
      </Box>
    </Box>
  );
};
export default AddressItem;
