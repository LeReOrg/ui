import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./UploadProductStyled";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Link } from "@material-ui/core";
import UploadInfo from "./UploadInfo";
import UploadPrice from "./UploadPrice";
import { UploadProductButton } from "./UploadProductStyled";
import { customCurrency } from "../../../utils/FunctionUses";
import axios from "axios";
import configs from "../../../config";
import SideBarCustomer from "../Customer/SideBarCustomer";
const UploadProduct = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [disabled, setDisabled] = useState(true);
  const [imageList, setImageList] = useState();
  const [licenseInfo, setLicenseInfo] = useState();

  let price_product = watch("price_product");
  let pile_price = watch("pile_price");
  let nameProduct = watch("nameProduct");
  let description = watch("description");
  let type_product = watch("type_product");
  let city = watch("city");
  let district = watch("district");
  let ward = watch("ward");
  let term = watch("term");

  useEffect(() => {
    if (
      nameProduct &&
      description &&
      type_product &&
      imageList &&
      price_product &&
      pile_price
    ) {
      setDisabled(false);
    }
  }, [
    nameProduct,
    description,
    type_product,
    pile_price,
    price_product,
    imageList,
  ]);
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    background.classList.add("customerPage");
    return () => {
      background.classList.remove("customerPage");
    };
  }, []);
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
    if (licenseInfo) {
      paramsUpdate.requiredLicenses = licenseInfo;
    }
    console.log(paramsUpdate);
  };
  const addproduct = () => {
    const params = {
      name: "Fantastic Soft Computer TEST ASD",
      price: "661.01",
      quanlity: "893",
      description: "",
      depositPrice: "670.38",
      shortestHiredDays: "314",
      discounts: [
        {
          days: "299",
          discount: "630.24",
        },
        {
          days: "25",
          discount: "172.3",
        },
      ],
      categoryId: "6070bc098a333f47342de70e",
      ownerId: "Ergonomic",
      brandId: "Avon",
      images: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACSCAIAAABjWndOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOASURBVHhe7dLRcoMgFADR/v9PpyQwjo1Zi3BVyOx56DSJXAX35yEB4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQmimOnx9TvpRxCBmHkHEIGYdQ5HGf/fKM42LGITRNHGm4cVxspjjKf7qKcQgZh5BxCM0RR5psHNebJo7yny5kHELGITRBHGmscdxijjjKf7rW6HFYxo2MQ8g4hIxDyDiEho4jDTSOG40eR/lPdzAOIeMQMg4h4xAaN4407QvimHoLQ8dR/tNNjEPIOIQmiCP9EztZlcIOPfz95Say8pWuNWIcOYikfNZNbo4jR7CVf8rX6C7tLyC/xX5l3F87P4U4dfjXCDuj2OM+++UZRw3jEDIOIeMQ+rY40sK18u3Gzk9axJzR/pto0Dat8jEqL/tXyJCRxWwv/JgaBj5feN2qfGVSPrfqnzC4mO2FH9Ohgc/3fPD65W+P/gmDi9le+DHVD2y4dV7S/8zhux5NzPbCj6lyYLqs4dZ5ScPCN/0TBhewvef7CT2m+mlt982r+p85dtcDCthe+BnVD2y7dV7V+dhpeVY+f6OAvYUfUP3Ahls/3+drVcPaRciQ8QXsLfyAKge23XdZ1fPYIUPG17u3dDrhB1Q5sO2+y6rmx04L+4dMoXdvZ5xO5cyGW6cly6qG5cl6QtI2ZBZdezvpaCrHNty9872mJW+rGoZMpGtvJx1N5diGu6+XdC7PGoZMpGtvJx1N5dh02dEHWF/fsHa75OiQubTv7eNhhTg0tvLi18P+ubJyYZLXJuXzyscvv8aIezt04q+3VpSvNj7+unP9m50r64fMaMS9tZ14WrWjXLTy8cstWp7tD9n/dXwjPv01Z1pzl3TN/mU7v/67dnwjPv01Z7r/8vKvSfkMPl6Tv0zK52mNuIHLjpVu9Hqztc/wduWhtYMbcRv5fJPy+UzlThvl5wplwUr5YX7fsxOFMw4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDiHjEDIOIeMQMg4h4xAyDoHH4xfaMQqZ6WTBOAAAAABJRU5ErkJggg==",
      ],
      location: {
        latitude: "-26.3604",
        longtitude: "-24.8298",
        address: "549 Graham Shoal",
        ward: "aut",
        district: "consequatur",
        city: "est",
      },
    };
    axios.post(`${configs.api}/products`, params).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className={classes.uploadMain}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid
            item
            lg={3}
            md={3}
            xs={0}
            className={classes.uploadMain_sideBar}
          >
            <SideBarCustomer />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
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
                    cityChoose={city}
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
                  <UploadPrice name={register} />
                </Box>
              </Grid>
            </Grid>
            <div className={classes.main_recipent__paymentButton}>
              <UploadProductButton
                onClick={addproduct}
                isDisabled={disabled}
                disabled={disabled}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default UploadProduct;
