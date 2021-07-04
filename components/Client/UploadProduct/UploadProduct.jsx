import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./UploadProductStyled";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import UploadInfo from "./UploadInfo";
import UploadPrice from "./UploadPrice";
import { UploadProductButton } from "./UploadProductStyled";
import { customCurrency } from "../../../utils/FunctionUses";
import SideBarCustomer from "../Customer/SideBarCustomer";
import { userState, listAddressState } from "../../../lib/recoil-root";
import { useRecoilValue, useRecoilState } from "recoil";
import { useAddProduct } from "../../../hooks/useProduct";
import { useRouter } from "next/router";
const UploadProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm();
  const [disabled, setDisabled] = useState(true);
  const [imageList, setImageList] = useState();
  const [licenseInfo, setLicenseInfo] = useState();
  const [proviceName, setProviceName] = useState();
  const [districtName, setDistrictName] = useState();
  const [wardName, setWardName] = useState();
  const currentUser = useRecoilValue(userState);
  const [discountDateItems, setDiscountDateItems] = useState([]);
  const [listAddress, setListAddress] = useRecoilState(listAddressState);

  let price = watch("price");
  let depositPrice = watch("depositPrice");
  let name = watch("name");
  let description = watch("description");
  let categoryId = watch("categoryId");
  let province = watch("province");
  let district = watch("district");
  let ward = watch("ward");
  let term = watch("term");
  let street = watch("street");
  let rent_date = watch("rent_date");
  let percent_discount = watch("percent_discount");
  useEffect(() => {
    if (listAddress !== "") {
      const cityName = listAddress?.city?.filter(
        (item, index) => item.idProvince == province
      );
      setProviceName(cityName);
      const districtItem = listAddress?.district?.filter(
        (item, index) => item.idDistrict == district
      );
      setDistrictName(districtItem);
      const wardItem = listAddress?.ward?.filter(
        (item, index) => item.idCommune == ward
      );
      setWardName(wardItem);
    }
  }, [province, district, ward]);
  const breadcrumbs = [
    {
      name: categoryId,
      categoryId: categoryId,
      url: categoryId,
    },
  ];
  useEffect(() => {
    if (
      name &&
      description &&
      categoryId &&
      imageList &&
      ward &&
      district &&
      province &&
      street &&
      price &&
      depositPrice
    ) {
      setDisabled(false);
    }
  }, [name, description, categoryId, depositPrice, price, imageList]);
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    background.classList.add("customerPage");
    return () => {
      background.classList.remove("customerPage");
    };
  }, []);
  useEffect(() => {
    let price_product_format = customCurrency(price);
    let depositPrice_format = customCurrency(depositPrice);
    setValue("price", price_product_format);
    setValue("depositPrice", depositPrice_format);
  }, [price, depositPrice]);
  const useStyled = makeStyles(styles);
  const getAllPicture = (value) => {
    setImageList(value);
  };
  const classes = useStyled();
  const { mutate, isLoading, isSuccess, isError } = useAddProduct();
  const onSubmit = (data) => {
    let paramsUpdate = data;
    if (imageList) {
      let arrayImages = [];
      imageList.map((item, index) => {
        let objectImages = {};
        objectImages.base64 = item.data_url;
        objectImages.isLandingImage = item?.isLandingImage;

        arrayImages.push(objectImages);
      });
      paramsUpdate.images = arrayImages;
    }
    if (licenseInfo) {
      paramsUpdate.requiredLicenses = licenseInfo;
    }
    paramsUpdate.price = price.replaceAll(",", "");
    paramsUpdate.depositPrice = depositPrice.replaceAll(",", "");
    paramsUpdate.discounts = discountDateItems;
    paramsUpdate.token = currentUser.token;
    paramsUpdate.breadcrumbs = breadcrumbs;
    paramsUpdate.address = {
      province: proviceName[0]?.name,
      ward: wardName[0]?.name,
      district: districtName[0]?.name,
      street,
    };
    delete paramsUpdate.province;
    delete paramsUpdate.ward;
    delete paramsUpdate.district;
    delete paramsUpdate.street;
    delete paramsUpdate.percent_discount;
    delete paramsUpdate.rent_date;
    mutate(paramsUpdate);
  };
  if (isSuccess) {
    if (
      name &&
      description &&
      categoryId &&
      imageList &&
      ward &&
      district &&
      province &&
      street &&
      price &&
      depositPrice
    )
      router.push("/uploadsuccess");
  }
  const getDiscountItems = (val) => {
    setDiscountDateItems([...discountDateItems, val]);
  };
  return (
    <div className={classes.uploadMain}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid
            item
            lg={2}
            md={3}
            xs={0}
            className={classes.uploadMain_sideBar}
          >
            <SideBarCustomer />
          </Grid>
          <Grid item lg={10} md={9} xs={12}>
            <h1 className={classes.uploadMain_Info__Title}>
              Đăng sản phẩm cho thuê
            </h1>
            <Grid container className={classes.uploadMain_Info}>
              <Grid
                item
                lg={12}
                md={12}
                xs={12}
                className={classes.uploadMain_InfoContent}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h2 className={classes.uploadMain_InfoContentTitle}>
                    Thông tin sản phẩm
                  </h2>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <div className={classes.iconInfo}></div>
                    <p className={classes.uploadMain_InfoIconText}>
                      Tìm hiểu về Upload Sản phẩm
                    </p>
                  </Box>
                </Box>

                <Box className={classes.uploadMain_InfoBody}>
                  <UploadInfo
                    cityChoose={province}
                    districtChoose={district}
                    descriptionNumber={description}
                    name={register}
                    licenseInfoItems={(val) => setLicenseInfo(val)}
                    picture={(value) => getAllPicture(value)}
                    term={term}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container className={classes.uploadMain_Info}>
              <Grid
                item
                lg={12}
                md={12}
                xs={12}
                className={classes.uploadMain_InfoContent}
              >
                <h1 className={classes.uploadMain_Info__Title}>
                  Giá thuê sản phẩm
                </h1>
                <Box className={classes.uploadMain_InfoBody}>
                  <UploadPrice
                    rent_date={rent_date}
                    percent_discount={percent_discount}
                    discountItems={(value) => getDiscountItems(value)}
                    name={register}
                  />
                </Box>
              </Grid>
            </Grid>
            <div className={classes.main_recipent__paymentButton}>
              <UploadProductButton isDisabled={disabled} disabled={disabled} />
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default UploadProduct;
