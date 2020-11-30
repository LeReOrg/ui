import React from 'react';
import { Field, ErrorMessage } from "formik";
import { Box, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const UploadPrice = () => {
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
          inputTagPrice : {
            padding: "9px 12px",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            borderRadius: "4px 0px 0px 4px",
            width: 480
          },
          informationCurrency : {
            border: "1px solid #D9D9D9",
            padding: "9px 12px",
            borderRadius: "0px 4px 4px 0px",
            background: "rgba(0, 0, 0, 0.04)"

          }
         
    }))

    const classes = useStyled();
    return (
        <>
            <Box mb={4} className={classes.rowInfo}>
                <p className={classes.titleText}>Giá sản phẩm</p>
                <Field
                    className={classes.inputTagPrice}
                    name="price_product"
                    placeholder="Nhập giá sản phẩm"
                />
                <span className={classes.informationCurrency}>đồng/ngày</span>
                {/* <ErrorMessage name="fullName" /> */}
            </Box>
           
            <Box mb={4} className={classes.rowInfo}>
                <p >Giá cọc (tùy chọn)</p>
                <Field
                    className={classes.inputTagPrice}
                    name="pile_price"
                    placeholder="Nhập giá cọc sản phẩm"
                />
                 <span className={classes.informationCurrency}>đồng</span>
                {/* <ErrorMessage name="fullName" /> */}
            </Box>
           
        </>
    );
};

export default UploadPrice;