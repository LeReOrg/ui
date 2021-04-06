import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { prefetchProductByCate } from "../hooks/useProductByCategory";
import { makeStyles } from "@material-ui/styles";
import styles from "../styles/CardProductTypeStyled";

const CardProductType = ({ info }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const link = `/type_product/${info._id}`;
  return (
    <>
      <Link as={link} href="/type_product/[index]">
        <a
          className={classes.linkTypeProduct}
          onMouseEnter={() => {
            prefetchProductByCate(info._id, 0);
          }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={info.image_url}
                title={info.name}
              />
            </CardActionArea>
          </Card>

          <Typography
            className={classes.content}
            align="center"
            variant="subtitle1"
          >
            {info && info.name}
          </Typography>
        </a>
      </Link>
    </>
  );
};
export default CardProductType;
