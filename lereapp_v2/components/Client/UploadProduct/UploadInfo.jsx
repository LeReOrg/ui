import React, { useEffect, useState } from "react";
import { Box, Grid, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ImageUploading from "react-images-uploading";
import styles from "./UploadProductStyled";
import CustomForm from "../../../utils/CustomForm.js";
import { useCategories } from "../../../hooks/useCategories";
import { isMobileDevice } from "../../../utils/FunctionUses";
const UploadInfo = (props) => {
  const [images, setImages] = useState();
  const [show, setShow] = useState(false);

  const { data: categories, isLoading, error } = useCategories();
  const maxNumberImage = 10;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  useEffect(() => {
    props.picture(images);
  }, [images]);
  const setCoverImage = (image) => {
    console.log(image);
  };
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <>
      <Box mb={4} className={classes.rowInfo}>
        {!isMobileDevice() ? (
          <p className={classes.titleText}>Hình ảnh sản phẩm</p>
        ) : null}
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
                className={classes.upload__image_button}
                {...dragProps}
              >
                Tải ảnh lên
              </button>
              <span className={classes.upload__image_span}>
                (Tối đa 10 hình)
              </span>
              <div className={classes.upload__image_content}>
                {imageList.map((image, index) => (
                  <div
                    className={classes.upload__image_eachItem}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                    key={index}
                  >
                    <img
                      src={image.data_url}
                      alt=""
                      className={classes.image_item}
                    />
                    
                      <div className={`${classes.image_item__btn_wrapper} ${show ? "showItem" : ""}`}>
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
              </div>
            </div>
          )}
        </ImageUploading>
      </Box>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Tên sản phẩm:</p>
        <CustomForm
          className={classes.inputTag}
          name={props.name}
          inputType="input"
          nameInput="nameProduct"
          placeholder="Tên sản phẩm"
        />
      </Box>

      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Mô tả sản phẩm:</p>
        <CustomForm
          inputType="textarea"
          name={props.name}
          className={classes.inputTag}
          nameInput="description"
          placeholder="Mô tả chi tiết sản phẩm"
        />
      </Box>
      <Box mb={4} className={classes.rowInfo}>
        <p className={classes.titleText}>Danh mục sản phẩm:</p>
        <CustomForm
          inputType="select"
          className={classes.inputTag}
          name={props.name}
          nameInput="type_product"
          placeholder="Chọn danh mục sản phẩm"
          nameSelect="Chọn danh mục sản phẩm"
          valueOptions={categories}
        />
      </Box>
    </>
  );
};

export default UploadInfo;
