import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageUploading from "react-images-uploading";
import styles from "./UploadProductStyled";
 
import { useCategories } from "../../../hooks/useCategories";
import { isMobileDevice } from "../../../utils/FunctionUses";
const UploadInfo = () => {
  const [images, setImages] = React.useState([]);
  const { data: categories, isLoading, error } = useCategories();
  const maxNumberImage = 10;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const setCoverImage = (image) => {
    console.log(image);
  };
  const useStyled = makeStyles(styles);
  const renderProductType = () => {
    return categories?.map((item, index) => (
      <option key={index} value={index + 1}>
        {item.name}
      </option>
    ));
  };
  const classes = useStyled();
 
  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        {!isMobileDevice() ?  <p className={classes.titleText}>Hình ảnh sản phẩm</p> : null }
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
            // write your building UI
            <div className={classes.upload__image_wrapper}>
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Tải ảnh lên
              </button>
              <span>(Tối đa 10 hình)</span>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => setCoverImage(image)}>
                      Đặt làm ảnh bìa
                    </button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
       
        {/* <ErrorMessage name="fullName" /> */}
      </Box>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Tên sản phẩm</p>
        <Field
          className={classes.inputTag}
          name="nameProduct"
          placeholder="Tên sản phẩm"
        />
        {/* <ErrorMessage name="fullName" /> */}
      </Box>

      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Mô tả sản phẩm</p>
        <Field
          as="textarea"
          className={classes.inputTag}
          name="description"
          placeholder="Mô tả chi tiết sản phẩm"
        />
        {/* <ErrorMessage name="fullName" /> */}
      </Box>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Danh mục sản phẩm</p>
        <Field
          as="select"
          className={classes.inputTag}
          name="type_product"
          placeholder="Chọn danh mục sản phẩm"
        >
          <option defaultValue hidden>
            Chọn danh mục sản phẩm
          </option>
          {renderProductType()}
        </Field>
        {/* <ErrorMessage name="fullName" /> */}
      </Box>
    </>
  );
};

export default UploadInfo;
