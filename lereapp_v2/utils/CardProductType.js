import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { prefetchProductByCate } from "../hooks/useProductByCategory";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      height: 72,
    },
  },
  content: {
    paddingTop: 16,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      paddingTop: 4,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 4,
    },
  },
  linkTypeProduct: {
    "&:hover": {
      textDecoration: "none",
      transition: "transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
      fontSize: 26,
    },
    color: "#111E16",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
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

const CardProductType = ({info}) => {
  const classes = useStyles();
  const link = `/type_product/${info._id}`
  return (
    <>
      <Link as={link} href="/type_product/[index]">
        <a
          className={classes.linkTypeProduct}
          onMouseEnter={() => {
            prefetchProductByCate(info._id);
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
