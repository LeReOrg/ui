import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Image from "next/image";
const CardProduct = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      [theme.breakpoints.down("xs")]: {
        height: 72,
      },
    },
    content: {
      paddingTop: 16,
      fontSize: 16,
      fontWeight: "normal",
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
        paddingTop: 4,
      },
    },
    price_item: {
      color: "#2F80ED",
      fontSize: 16,
      fontWeight: "bold",
    },
    linkTypeProduct: {
      "&:hover": {
        textDecoration: "none",
        transition: "transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
      },
      color: "#111E16",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
    },
    media: {
      height: 160,
      "&:hover": {
        transform: "scale(1.2)",
        transition: "transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
      },
      [theme.breakpoints.down("xs")]: {
        height: 72,
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Link as={`/${props.item.id}`} href="/[product]">
        <a className={classes.linkTypeProduct}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={props.item.image_url}
                title="Contemplative Reptile"
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
            {props.item.price}/ngày
          </Typography>
        </a>
      </Link>
    </>
  );
};
export default CardProduct;
