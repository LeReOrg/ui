import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styles from "../styles/AddressItemStyled";
import { makeStyles } from "@material-ui/core/styles";
import { useDeleteAddressUser, useAddressUser } from "../hooks/useAddress";
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
import { useRouter } from "next/router";
function PaperComponent(props) {
  return <Paper {...props} />;
}
const AddressItem = ({ item }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled({
    default: item?.isDefaultAddress,
  });
  const router = useRouter();

  const user = useRecoilValue(userState);
  const [open, setOpen] = useState(false);
  const { mutate: deleteAddressUser } = useDeleteAddressUser();
  const { mutate: setDefaultAddress, data } = useAddressUser();

  const deleteAddress = () => {
    const params = {
      id: item._id,
      token: user.token,
    };
    deleteAddressUser(params);
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDefaultAddress = () => {
    const params = {
      id: item._id,
      token: user.token,
      isDefaultAddress: true,
    };
    setDefaultAddress(params);
    router.push("/payment");
  };
  return (
    <Box className={classes.addressItemContainer}>
      <Box className={classes.addressItemName}>
        {item.fullName}
        {item?.isDefaultAddress && (
          <p style={{ color: "rgb(0, 153, 0)", fontSize: 11 }}>Mặc định</p>
        )}
      </Box>
      <Box className={classes.addressItemAddress}>
        Địa chỉ: {item.street}, {item.ward}, {item.district}, {item.province}
      </Box>
      <Box className={classes.addressItemTelephone}>
        Điện thoại: {item.phoneNumber}
      </Box>
      <Box className={classes.addressItemAction}>
        <Box
          className={classes.addressItemAction1}
          onClick={handleDefaultAddress}
        >
          Giao đến địa chỉ này
        </Box>
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
