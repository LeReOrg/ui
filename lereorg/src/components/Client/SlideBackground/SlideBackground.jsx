import React from "react";
import Search from "../Search/Search";
import { makeStyles } from "@material-ui/core/styles";
import BackGround from "../../../assets/img/background/background1.png";
const useStyles = makeStyles((theme) => ({
  root: {},
  background: {
    backgroundImage: `url(${BackGround})`,
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
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
