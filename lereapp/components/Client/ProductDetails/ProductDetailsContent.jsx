import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box, Button } from "@material-ui/core";

const ProductDetailsContent = ({...props}) => {
    const useStyled = makeStyles((theme) => ({
        main_list: {
          width: "92%",
          margin: "40px auto",
          [theme.breakpoints.down("sm")]: {
            margin: "0px auto",
          },
        },
        title: {
            color: "#111E16",
            fontSize: 24,
            fontWeight: "bold",
        },
        content: {
            color: "#111E16",
            fontSize: 16,
            marginTop: "2%",
        },
        read_more: {
            color: "#2FAF62",
            fontSize: 16,
            marginTop: "2%",
        }
    }));
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