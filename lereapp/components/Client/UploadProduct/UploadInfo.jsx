import React from "react";
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageUploading from "react-images-uploading";

const UploadInfo = ({ type_product }) => {
  const [images, setImages] = React.useState([]);
  const maxNumberImage = 10;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const setCoverImage = (image) => {
    console.log(image);
  };
  const useStyled = makeStyles((theme) => ({
    titleText: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      paddingBottom: 3,
    },
    rowInfo: {
      marginBottom: 32,
      display: "flex",
      justifyContent: "space-between",
      width: "55%",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        alignItems: "left",
      },
    },
    inputTag: {
      padding: "9px 12px",
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderRadius: 4,
      width: 480,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        alignItems: "left",
      },
    },
  }));
  const renderProductType = () => {
    return type_product.map((item, index) => (
      <option key={index} value={index + 1}>
        {item.name}
      </option>
    ));
  };
  const classes = useStyled();

  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Hình ảnh sản phẩm</p>
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
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Tải ảnh lên
              </button>
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
        <span>(Tối đa 10 hình)</span>
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
