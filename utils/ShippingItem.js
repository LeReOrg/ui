import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Button, Box } from "@material-ui/core";
import styles from "../styles/ShippingItemStyled";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Image from "next/image";

const ShippingItem = ({ item }) => {
  console.log(item);
  const {
    name,
    price,
    depositPrice,
    quantity,
    image,
    toDate,
    formDate,
    totalDays,
  } = item.item;
  let startDateFormat = formDate?.slice(0, 10);
  let startDay = `${startDateFormat.substr(-2, 2)}/${startDateFormat.substr(
    -5,
    2
  )}/${startDateFormat.substr(0, 4)}`;
  let endDateFormat = toDate?.slice(0, 10);
  let endDay = `${endDateFormat.substr(-2, 2)}/${endDateFormat.substr(
    -5,
    2
  )}/${endDateFormat.substr(0, 4)}`;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2} className={classes.cartContainer}>
          <Grid item xl={4} xs={3}>
            <Box display="flex">
              <Image
                src={image.url}
                title={image.name}
                width={88}
                height={88}
              />
              <Box className={classes.cartName}>
                <Typography className={classes.nameItem}>{name}</Typography>
                <p>SL: x{quantity}</p>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={4} xs={3}>
            <Box>
              <Box>
                {startDay} - {endDay}
              </Box>
              <Box className={classes.cartName}>{totalDays} ngày</Box>
            </Box>
          </Grid>
          <Grid item xl={4} lg={9} xs={9} className={classes.infoContent}>
            <Typography className={classes.infoItem}>
              <span>
                {price?.toLocaleString("en-US")}
                đ/ngày
              </span>
            </Typography>
            <Typography className={classes.infoItem}>
              <span>
                {depositPrice?.toLocaleString("en-US")}
                đ/ngày
              </span>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ShippingItem;
