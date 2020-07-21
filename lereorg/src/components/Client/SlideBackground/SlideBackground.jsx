import React from "react";
import Search from "../Search/Search"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root : {
    position : 'absolute',
    top : 0,
    left : 0,
    right : 0
  }
}))
const SlideBackground = () => {
  const classes = useStyles();
  return(
  <div className={classes.root} id='background'>
        <img
          src={require("../../../assets/img/background/background1.png")}
          className="d-block w-100 img-fluid img-background"
          alt="..."
        
        />
    <Search />
  </div>
)};

export default SlideBackground;
