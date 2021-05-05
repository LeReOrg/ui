import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { prefetchProductByCate } from "../hooks/useProductByCategory";
import { makeStyles } from "@material-ui/styles";
import styles from "../styles/CardProductTypeStyled";
import Image from "next/image";
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
            prefetchProductByCate(info._id);
          }}
        >
          <Image
            className={classes.media}
            src={info.thumbnail.url}
            alt={info.name}
            width={285}
            height={160}
          />
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
