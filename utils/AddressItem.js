import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styles from "../styles/AddressItemStyled";
import { makeStyles } from "@material-ui/core/styles";
import { useDeleteAddressUser } from "../hooks/useAddress";
import { userState } from "../lib/recoil-root";
import { useRecoilValue } from "recoil";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Paper,
  DialogTitle,
} from "@material-ui/core";
function PaperComponent(props) {
  return <Paper {...props} />;
}
const AddressItem = ({ item }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const user = useRecoilValue(userState);
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteAddressUser();
  console.log(item);
  const deleteAddress = () => {
    const params = {
      id: item._id,
      token: user.token,
    };
    mutate(params);
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.addressItemContainer}>
      <Box className={classes.addressItemName}>{item.fullName}</Box>
      <Box className={classes.addressItemAddress}>
        Địa chỉ: {item.street},{item.ward},{item.district},{item.province}
      </Box>
      <Box className={classes.addressItemTelephone}>
        Điện thoại: {item.phoneNumber}
      </Box>
      <Box className={classes.addressItemAction}>
        <Box className={classes.addressItemAction1}>Giao đến địa chỉ này</Box>
        <Box className={classes.addressItemAction2}>Sửa</Box>
        <Box className={classes.addressItemAction2} onClick={handleClickOpen}>
          Xóa
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>Xóa địa chỉ?</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn có thật sự muốn xóa?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteAddress} color="primary">
            OK
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default AddressItem;
