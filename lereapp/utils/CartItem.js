import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectBoxCart from "../utils/SelectBoxCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const CartItem = ({ item, addItem }) => {
  const { name, price, cungcap, songay, coc, soluong, image } = item;
  const [allParamCart, setParamCart] = useState(item);
  const useStyles = makeStyles((theme) => ({
    smallImage: {
      //   height: 88,
      //   width: 88,
    },
    cartBody: {
      display: "flex",
      alignItems: "center",
      margin: "24px 24px",
      border: "none",
    },
    nameProvided: {
      color: "#2F80ED",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 12,
    },
    infoAmount: {
      float: "right",
      textAlign: "right",
    },
    deleteButton: {
      padding: 0,
      float: "right",
      display: "inline-block",
      textAlign: "right",
    },
    hrCart: {
      marginRight: 24,
      marginLeft: 24,
      background: "#E7E9E8",
      "&:last-child" :{
          display : "none"
      }
    },
    
  }));
  const classes = useStyles();

  const handleNumberAndQuantityChange = (itemChange) => {
    setParamCart((preState) => ({
      ...preState,
      ...itemChange,
    }));
  };
  console.log(allParamCart);
  return (
    <>
      <div className={classes.cartBody}>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
                title="Contemplative Reptile"
                className={classes.smallImage}
              />
            </CardActionArea>
          </Grid>
          <Grid item lg={3}>
            <Typography>
              {name === undefined
                ? "Go Pro 5 con xin 99% ,mới được mua còn bảo hành 3 tháng còn bảo hành abcxyz"
                : name}
            </Typography>
            <Typography>
              Cung cấp bởi{" "}
              <span className={classes.nameProvided}>{cungcap}</span>
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <SelectBoxCart
              numberDate={songay}
              quantity={soluong}
              onNumberAndQuantityChange={handleNumberAndQuantityChange}
            />
          </Grid>
          <Grid item lg={5} className={classes.infoAmount}>
            <Typography>{price}đ/ngày</Typography>
            <Typography>Cọc : {coc}đ/ngày</Typography>
            <Button className={classes.deleteButton}>
              <DeleteOutlineIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
      <hr className={classes.hrCart} />
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
