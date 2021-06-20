import React, { useEffect, useState } from "react";
import styles from "./UploadSuceessStyled";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import { HomeButton, UploadAnotherProductButton } from "./UploadSuceessStyled";
import SideBarCustomer from "../Customer/SideBarCustomer";
import { userState, productAddDetailState } from "../../../lib/recoil-root";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Image from "next/image";
const UploadSuccessPage = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const productAddDetail = useRecoilValue(productAddDetailState);
  let requiredLicenses1 = "";
  let requiredLicenses2 = "";
  let requiredLicenses3 = "";

  console.log(productAddDetail);
  if (productAddDetail.requiredLicenses) {
    productAddDetail.requiredLicenses.includes("1")
      ? (requiredLicenses1 = "CMND")
      : (requiredLicenses1 = "");
    productAddDetail.requiredLicenses.includes("2")
      ? (requiredLicenses2 = "Căn cước")
      : (requiredLicenses2 = "");
    productAddDetail.requiredLicenses.includes("3")
      ? (requiredLicenses3 = "Bằng lái")
      : (requiredLicenses3 = "");
  }

  useEffect(() => {
    let background = document.getElementById("container-fluid");
    background.classList.add("customerPage");
    return () => {
      background.classList.remove("customerPage");
    };
  }, []);

  const useStyled = makeStyles(styles);
  const classes = useStyled({ lengh: productAddDetail?.discounts?.length });
  const onSubmit = (data) => {};
  const renderDiscount = () =>
    productAddDetail?.discounts?.map((item, index) => (
      <div key={index} className={classes.itemDiscount}>
        <>
          {item.days} ngày {item.discount}%
        </>
      </div>
    ));
  const renderImagesSub = () =>
    productAddDetail?.images.map((item, index) => {
      if (index > 0) {
        return (
          <Image
            key={index}
            className={classes.uploadMain_ImageItem}
            src={item.url}
            width={120}
            height={120}
            layout="fixed"
            quality={100}
          />
        );
      }
    });

  return (
    <div className={classes.uploadMain}>
      <Grid container spacing={4}>
        <Grid item lg={3} md={3} className={classes.uploadMain_sideBar}>
          <SideBarCustomer />
        </Grid>

        <Grid item lg={9} md={9} xs={12}>
          <h1 className={classes.uploadMain_InfoSuccess__Title}>
            Đăng sản phẩm thành công
          </h1>
          <Box className={classes.uploadMain_Info}>
            <Box className={classes.uploadMain_InfoContent}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
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
              <Grid container spacing={4}>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xs={6}
                  className={classes.uploadMain_left}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>Tên sản phẩm:</p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.name}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>Nhãn hàng:</p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.label}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Danh mục sản phẩm:
                    </p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail?.category.name}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Yêu cầu giấy tờ:
                    </p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {requiredLicenses1}
                      {requiredLicenses2 !== "" ? `; ${requiredLicenses2}` : ""}
                      {requiredLicenses3 !== "" ? `; ${requiredLicenses3}` : ""}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Địa chỉ sản phẩm:
                    </p>
                    <div
                      className={classes.uploadMain_InfoItemDetail}
                      style={{ textAlign: "right" }}
                    >
                      <p>
                        {productAddDetail && productAddDetail.address.street}
                      </p>
                      <p>
                        {productAddDetail && productAddDetail.address.ward} ,
                        {productAddDetail && productAddDetail.address.district}
                      </p>
                      <p>
                        {productAddDetail && productAddDetail.address.province}
                      </p>
                    </div>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>Giá cho thuê:</p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.price}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>Đặt cọc:</p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.depositPrice}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Min order (MOQ):
                    </p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.shortestHiredDays}{" "}
                      ngày
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>Khuyến mãi:</p>
                    <p
                      className={`${classes.uploadMain_InfoItemDetail} ${classes.uploadMain_InfoItemDetailDes} `}
                    >
                      {renderDiscount()}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Mô tả sản phẩm:
                    </p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.description}
                    </p>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <p className={classes.uploadMain_InfoItem}>
                      Điều khoản thuê sản phẩm:
                    </p>
                    <p className={classes.uploadMain_InfoItemDetail}>
                      {productAddDetail && productAddDetail.term}
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xs={6}
                  className={classes.uploadMain_right}
                >
                  <h2 className={classes.uploadMain_InfoItem}>
                    Hình ảnh sản phẩm:
                  </h2>
                  <Box className={classes.uploadMain_ImageDetails}>
                    <h3>Ảnh bìa</h3>
                    <Box className={classes.uploadMain_ImageContainer}>
                      <Image
                        className={classes.uploadMain_ImageItem}
                        src={
                          productAddDetail && productAddDetail.images[0]?.url
                        }
                        width={120}
                        height={120}
                        layout="fixed"
                        quality={100}
                      />
                    </Box>
                    <h3>Ảnh con</h3>
                    <Box className={classes.uploadMain_ImageContainer}>
                      {renderImagesSub()}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <div className={classes.main_recipent__paymentButtonDetails}>
            <HomeButton backHome={() => router.push("/")} />
            <UploadAnotherProductButton backAddProduct={() => router.back()} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default UploadSuccessPage;
