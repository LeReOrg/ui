import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import styles from "../styles/CardProductStyled";
const CardProduct = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <>
      <Link as={`/${props.item._id}`} href="/[product]">
        <a className={classes.linkTypeProduct}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={props.item.image_url}
                title={props.item.name}
              />
              {/* <Image
                src={props.item.image_url}
                title={props.item.name}
                layout='fill'
              /> */}
            </CardActionArea>
          </Card>

          <Typography className={classes.content} align="left">
            {props.item.name}
          </Typography>
          <Typography className={classes.price_item} align="left">
            {props.item.price.toLocaleString("en-US")}đ/ngày
          </Typography>
        </a>
      </Link>
    </>
  );
};
export default CardProduct;
