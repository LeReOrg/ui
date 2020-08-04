import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imageTest from "../assets/Img.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  content: {
    paddingTop: 16,
    fontSize: 16,
    fontWeight : "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 4,
    },
  },
  price_item : {
    color: "#2F80ED",
    fontSize : 16,
    fontWeight : "bold",
  }
}));

const CardProduct = (props) => {
  const classes = useStyles();
  return (
    <>
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
        align="left"
        
      >
          {props.test === undefined ? "Go Pro 5 con xin 99% ,mới được mua còn bảo hành 3 tháng còn bảo hành abcxyz" : "go prosdascixachjdc"}
        
      </Typography>
      <Typography
        className={classes.price_item}
        align="left"
       
      >
       30,000đ/ngày
      </Typography>
    </>
  );
};
export default CardProduct;
