import React from 'react';
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const UploadInfo = (props) => {
    console.log(props)
    const useStyled = makeStyles((theme) => ({ 
        titleText: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
            paddingBottom: 3,
          },
          rowInfo : {
            marginBottom: 32,
            display: "flex",
            justifyContent: "space-between",
            width: "55%",
            alignItems: "center"
          },
          inputTag : {
            padding: "9px 12px",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            borderRadius: 4,
            width: 480
          }
         
    }))
    const classes = useStyled();
    return (
        <>
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
                    as = "textarea"
                    className={classes.inputTag}
                    name="description"
                    placeholder="Mô tả chi tiết sản phẩm"
                />
                {/* <ErrorMessage name="fullName" /> */}
            </Box>
            <Box mb={4} className={classes.rowInfo}>
                <p className={classes.titleText}>Danh mục sản phẩm</p>
                <Field
                     as = "select"
                    className={classes.inputTag}
                    name="type_product"
                    placeholder="Chọn danh mục sản phẩm"
                />
                {/* <ErrorMessage name="fullName" /> */}
            </Box>
        </>
    );
};

export default UploadInfo;