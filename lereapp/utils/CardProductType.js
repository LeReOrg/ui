import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imageTest from "../assets/testdanhmuc.png";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  content: {
    paddingTop: 16,
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 4,
    },
  },
}));

const CardProductType = ({info}) => {
  const classes = useStyles();
  const link = `/type_product/${info.id}`
  return (
    <>
      <Link as={link} href="/type_product/[index]">
        <a>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={imageTest}
                title="Contemplative Reptile"
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
