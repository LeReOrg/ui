import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./ShippingStyled";
import CustomForm from "../../../utils/CustomForm.js";
import { useCity, useDistrict, useWard } from "../../../hooks/useLocation";
import { listAddressState } from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";

const ShippingInfo = ({ cityChoose, districtChoose, name }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [listAddress, setListAddress] = useRecoilState(listAddressState);

  const { data: city } = useCity();
  const { data: district } = useDistrict(cityChoose);
  const { data: ward } = useWard(districtChoose);
  useEffect(() => {
    city && setListAddress((preState) => ({ ...preState, city: city }));
    district &&
      setListAddress((preState) => ({ ...preState, district: district }));
    ward && setListAddress((preState) => ({ ...preState, ward: ward }));
  }, [city, district, ward]);
  return (
    <>
      <Box mb={2}>
        <p className={classes.titleText}>Họ và tên</p>
        <CustomForm
          className={classes.inputTag}
          name={name}
          nameInput="fullName"
          placeholder="Họ và tên"
          inputType="input"
        />
      </Box>
      <Box mb={2}>
        <p className={classes.titleText}>Điện thoại di động</p>
        <CustomForm
          className={classes.inputTag}
          nameInput="phoneNumber"
          inputType="number"
          name={name}
          placeholder="Nhập số điện thoại"
        />
      </Box>
      <Box mb={2} className={classes.addAddressMobile}>
        <p className={classes.titleText}>Địa chỉ nhận hàng</p>
      </Box>
      <Box mb={2} className={classes.city}>
        <p className={classes.titleText}>Tỉnh/Thành phố</p>
        <CustomForm
          inputType="select"
          className={classes.inputTag}
          name={name}
          nameInput="province"
          nameSelect=" Chọn Tỉnh/Thành phố"
          valueOptions={city}
        />
      </Box>
      <Box mb={2} className={classes.district}>
        <p className={classes.titleText}>Quận/Huyện</p>
        <CustomForm
          className={classes.selectTag}
          nameInput="district"
          inputType="select"
          name={name}
          nameSelect="Chọn Quận/Huyện"
          valueOptions={district}
        />
      </Box>
      <Box mb={2} className={classes.ward}>
        <p className={classes.titleText}>Phường/Xã</p>
        <CustomForm
          inputType="select"
          className={classes.inputTag}
          name={name}
          nameInput="ward"
          nameSelect="Chọn Phường/Xã"
          valueOptions={ward}
        />
      </Box>
      <Box mb={2} className={classes.ward}>
        <p className={classes.titleText}>Địa chỉ cụ thể</p>
        <CustomForm
          placeholder="VD: 253/4 Lê Duẩn"
          className={classes.inputTag}
          name={name}
          inputType="textarea"
          nameInput="street"
        />
      </Box>
    </>
  );
};
export default ShippingInfo;
