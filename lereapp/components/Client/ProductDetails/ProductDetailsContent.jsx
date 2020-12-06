import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box, Button } from "@material-ui/core";
import styles from "./ProductDetailsContentStyled";

const ProductDetailsContent = ({...props}) => {
    const useStyled = makeStyles(styles);
    const classes = useStyled()
    
    const renderReadMore = () => {
        let length = props.content._content.length
        if(length > 700){
            return(
                <Typography
                    className={classes.read_more}
                    align="left"                    
                >
                    Xem thêm
                </Typography>
            )
        }
    }

    return(
        <div className={classes.main_list}>
            <Grid container>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        className={classes.title}
                        align="left"                    
                    >
                        Chi tiết sản phẩm
                    </Typography>
                    <Typography
                        className={classes.content}
                        align="left"                    
                    >
                        {props.content._content}
                    </Typography>
                    {renderReadMore()}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetailsContent;