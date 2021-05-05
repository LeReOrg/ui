import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import styles from "../styles/CardProductStyled";
import { prefetchProductByDetails } from "../hooks/useProduct";
const CardProduct = ({ item }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <>
      <Link as={`/${item._id}`} href="/[product]">
        <a
          className={classes.linkTypeProduct}
          onMouseEnter={() => {
            prefetchProductByDetails(item._id);
          }}
        >
          <Image
            src={item.images[0].url}
            title={item.name}
            width={285}
            height={160}
          />

          <Typography className={classes.content} align="left">
            {item.name}
          </Typography>
          <Typography className={classes.price_item} align="left">
            {item.price.toLocaleString("en-US")}đ/ngày
          </Typography>
        </a>
      </Link>
    </>
  );
};
export default CardProduct;
