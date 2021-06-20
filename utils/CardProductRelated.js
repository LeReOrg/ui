import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const CardProductRelated = ({ item }) => {
  console.log(item);
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    content: {
      paddingTop: 16,
      fontSize: 16,
      fontWeight: "normal",
      color: "#111E16",
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
  }));
  const classes = useStyles();
  return (
    <>
      <Link as={`/${item?._id}`} href="/[product]">
        <a>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image={item?.images[0]?.url}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>

          <Typography className={classes.content} align="left">
            {item?.name}
          </Typography>
          <Typography className={classes.price_item} align="left">
            {item?.price}đ/ngày
          </Typography>
        </a>
      </Link>
    </>
  );
};
export default CardProductRelated;
