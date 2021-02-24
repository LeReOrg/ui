import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./UploadProductStyled";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import UploadInfo from "./UploadInfo";
import UploadPrice from "./UploadPrice";
import { UploadProductButton } from "./UploadProductStyled";
import { customCurrency } from "../../../utils/FunctionUses";
const UploadProduct = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [disabled, setDisabled] = useState(true);
  const [imageList, setImageList] = useState();

  let price_product = watch("price_product");
  let pile_price = watch("pile_price");
  let nameProduct = watch("nameProduct");
  let description = watch("description");
  let type_product = watch("type_product");
  useEffect(() => {
    if(nameProduct && description && type_product && imageList && price_product && pile_price){
      setDisabled(false)
    }
  }, [nameProduct,description,type_product,pile_price,price_product,imageList]);
  useEffect(() => {
    let price_product_format = customCurrency(price_product);
    let pile_price_format = customCurrency(pile_price);
    setValue("price_product", price_product_format);
    setValue("pile_price", pile_price_format);
  }, [price_product, pile_price]);
  const useStyled = makeStyles(styles);
  const getAllPicture = (value) => {
    setImageList(value);
  };
  const classes = useStyled();
  const onSubmit = (data) => {
    let paramsUpdate = data;
    if (imageList) {
      paramsUpdate.imageList = imageList;
    }
    console.log(paramsUpdate);
  };
  return (
    <div className={classes.uploadMain}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.uploadMain_Info}>
          <Grid item lg={12} md={12} xs={12} className={classes.uploadMain_InfoContent}>
            <h1 className={classes.uploadMain_Info__Title}>
              Thông tin sản phẩm
            </h1>
            <Box className={classes.uploadMain_InfoBody}>
              <UploadInfo
                name={register}
                picture={(value) => getAllPicture(value)}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container className={classes.uploadMain_Info}>
          <Grid item lg={12} md={12} xs={12} className={classes.uploadMain_InfoContent}>
            <h1 className={classes.uploadMain_Info__Title}>
              Giá thuê sản phẩm
            </h1>
            <Box className={classes.uploadMain_InfoBody}>
              <UploadPrice name={register} />
            </Box>
          </Grid>
        </Grid>
        <div className={classes.main_recipent__paymentButton}>
          <UploadProductButton isDisabled={disabled} disabled={disabled} />
        </div>
      </form>
    </div>
  );
};
export default UploadProduct;
