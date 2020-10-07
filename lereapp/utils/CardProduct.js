import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
const CardProduct = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
    media: {
      height: `${props.itemByType ? "160px" : "215px"}`,
      objectFit : "fill"
    },
  }));
  const classes = useStyles();
  return (
    <>
    <Link as={`/${props.item.id}`} href="/[product]" >
      <a>
    <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={props.item.image_url}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>

      <Typography
        className={classes.content}
        align="left"
        
      >
          {props.item.name}
        
      </Typography>
      <Typography
        className={classes.price_item}
        align="left"
       
      >
       {props.item.price}/ngày
      </Typography>
      </a>
    </Link>
    
    </>
  );
};
export default CardProduct;
