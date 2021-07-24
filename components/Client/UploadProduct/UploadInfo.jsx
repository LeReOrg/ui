import React, { useEffect, useState } from "react";
import { Box, Grid, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploading from "react-images-uploading";
import styles from "./UploadProductStyled";
import CustomForm from "../../../utils/CustomForm.js";
import { useCategories } from "../../../hooks/useCategories";
import { isMobileDevice } from "../../../utils/FunctionUses";
import { TagPicker } from "rsuite";
import { Checkbox } from "rsuite";
import { useCity, useDistrict, useWard } from "../../../hooks/useLocation";
import { useRecoilState } from "recoil";
import { listAddressState } from "../../../lib/recoil-root";
import { clone } from "lodash";

const UploadInfo = ({
  descriptionNumber,
  picture,
  licenseInfoItems,
  name,
  term,
  cityChoose,
  districtChoose,
}) => {
  const [images, setImages] = useState(null);
  const [listAddress, setListAddress] = useRecoilState(listAddressState);
  const { data: categories, isLoading, error } = useCategories();
  const { data: city } = useCity();
  const { data: district } = useDistrict(cityChoose);
  const { data: ward } = useWard(districtChoose);
  useEffect(() => {
    city && setListAddress((preState) => ({ ...preState, city: city }));
    district &&
      setListAddress((preState) => ({ ...preState, district: district }));
    ward && setListAddress((preState) => ({ ...preState, ward: ward }));
  }, [city, district, ward]);

  const maxNumberImage = 10;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const licenseItems = [
    {
      label: "CMND",
      value: "1",
    },
    {
      label: "Căn Cước",
      value: "2",
    },
    {
      label: "Bằng lái",
      value: "3",
    },
  ];
  useEffect(() => {
    picture(images);
  }, [images]);
  const setCoverImage = (image) => {
    images.map((item, index) => {
      if (item.file.name === image.file.name) {
        const imagesClone = clone(images);
        imagesClone[index].isLandingImage = true;
        setImages(imagesClone);
      }
    });
  };
  const useStyled = makeStyles(styles);
  const styledTag = { borderRadius: 4, backgroundColor: "#ffffff" };
  const classes = useStyled();
  const getValueBack = (value, item) => {
    licenseInfoItems(value);
  };
  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.rowInfoContent}
        >
          {!isMobileDevice() ? (
            <p className={classes.titleText}>Ảnh sản phẩm:</p>
          ) : null}
          <div className={classes.upload__image_span}>(Tối đa 10 hình)</div>
        </Box>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumberImage}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className={classes.upload__image_wrapper}>
              {imageList?.map((image, index) => (
                <div className={classes.upload__image_eachItem} key={index}>
                  <img
                    src={image.data_url}
                    alt=""
                    className={classes.image_item}
                  />
                  <div className={classes.image_item__btn_wrapper}>
                    <button
                      className={classes.image_item__btn_coverImage}
                      onClick={() => setCoverImage(image)}
                    >
                      Đặt làm ảnh bìa
                    </button>
                    <button
                      className={classes.image_item__btn_deleteImage}
                      onClick={() => onImageRemove(index)}
                    >
                      Xóa ảnh
                    </button>
                  </div>
                </div>
              ))}
              <div className={classes.upload__image_eachItem}>
                <button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  className={classes.upload__image_button}
                  {...dragProps}
                >
                  <div className={classes.upload__imageIcon_wrapper}></div>
                  <p className={classes.upload__imageIconText}>Tải ảnh lên</p>
                </button>
              </div>
            </div>
          )}
        </ImageUploading>
      </Box>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={classes.rowInfo}>
            <p className={classes.titleText}>Tên sản phẩm:</p>
            <CustomForm
              className={classes.inputTag}
              name={name}
              inputType="input"
              nameInput="name"
              placeholder="Tên sản phẩm"
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={classes.rowInfo}>
            <p className={classes.titleText}>Nhãn hàng:</p>
            <CustomForm
              className={classes.inputTag}
              name={name}
              inputType="input"
              nameInput="label"
              placeholder="Nhãn hàng"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={classes.rowInfo}>
            <p className={classes.titleText}>Danh mục sản phẩm:</p>
            <CustomForm
              inputType="select"
              className={classes.inputTag}
              name={name}
              nameInput="categoryId"
              placeholder="Chọn danh mục sản phẩm"
              nameSelect="Chọn danh mục sản phẩm"
              valueOptions={categories}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={classes.rowInfo}>
            <p className={classes.titleText}>Yêu cầu giấy tờ:</p>
            <TagPicker
              data={licenseItems}
              placeholder="Chọn loại giấy tờ"
              size="lg"
              onSelect={(value, item) => getValueBack(value, item)}
              style={styledTag}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={classes.rowInfo}>
            <p className={classes.titleText}>Số lượng sản phẩm:</p>
            <CustomForm
              inputType="number"
              className={classes.inputTag}
              name={name}
              nameInput="quantity"
              placeholder="Số lượng sản phẩm:"
            />
          </Box>
        </Grid>
      </Grid>
      <Box className={`${classes.rowInfo} ${classes.rowInfoTextArea}`}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <p className={classes.titleText}>Mô tả sản phẩm:</p>
          <p className={classes.titleNumberText}>
            {(descriptionNumber && descriptionNumber.length) || 0}
            /2000
          </p>
        </Box>
        <CustomForm
          inputType="textarea"
          name={name}
          className={classes.inputTag}
          nameInput="description"
          placeholder="Mô tả chi tiết sản phẩm"
        />
      </Box>
      <Box className={`${classes.rowInfo} ${classes.rowInfoTextArea}`}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <p className={classes.titleText}>Điều khoản thuê sản phẩm:</p>
          <p className={classes.titleNumberText}>
            {(term && term.length) || 0}
            /2000
          </p>
        </Box>
        <CustomForm
          inputType="textarea"
          name={name}
          className={classes.inputTag}
          nameInput="term"
          placeholder="Điều khoản thuê sản phẩm:"
        />
      </Box>
      <p className={`${classes.titleText} ${classes.rowInfoTextArea}`}>
        Địa chỉ sản phẩm:
      </p>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={`${classes.rowInfo} `}>
            <CustomForm
              inputType="select"
              className={classes.inputTag}
              name={name}
              nameInput="province"
              placeholder="Tỉnh/Thành phố"
              nameSelect="Tỉnh/Thành phố"
              valueOptions={city}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={`${classes.rowInfo}`}>
            <CustomForm
              inputType="select"
              className={classes.inputTag}
              name={name}
              nameInput="district"
              placeholder="Quận/Huyện"
              nameSelect="Quận/Huyện"
              valueOptions={district}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={`${classes.rowInfo}`}>
            <CustomForm
              inputType="select"
              className={classes.inputTag}
              name={name}
              nameInput="ward"
              placeholder="Phường/Xã"
              nameSelect="Phường/Xã"
              valueOptions={ward}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box className={`${classes.rowInfo}`}>
            <CustomForm
              className={classes.inputTag}
              name={name}
              inputType="input"
              nameInput="street"
              placeholder="Địa chỉ cụ thế"
            />
          </Box>
        </Grid>
      </Grid>
      <Checkbox>Sử dụng địa chỉ cho những lần sau</Checkbox>
    </>
  );
};

export default UploadInfo;
