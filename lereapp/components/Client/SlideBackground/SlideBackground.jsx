import React from "react";
import Search from "../Search/Search";
import { makeStyles } from "@material-ui/core/styles";
import BackGround from "../../../assets/background.png";
const useStyles = makeStyles((theme) => ({
  root: {
    position  : "relative"
  },
  background: {
    backgroundImage: `url(${BackGround})`,
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: "35vh",
    },
    [theme.breakpoints.down("sm ")]: {
      height: "30vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
   
  },
}));
const SlideBackground = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="background">
      <div className={classes.background}></div>

      <Search />
    </div>
  );
};

export default SlideBackground;
