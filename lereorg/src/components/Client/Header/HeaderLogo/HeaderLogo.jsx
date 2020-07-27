import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image_logo from "../../../../assets/img/background/logo.png";
const useStyles = makeStyles((theme) => ({
  header_wrap_logo: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      alignItems: "flex-start",
    },
  },
  header_logo: {
    width: 32,
    height: 32,
    backgroundSize: "contain",
    backgroundImage: `url(${image_logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("xs")]: {
      width: 18,
      height: 18,
    },
  },
  header_logo_title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 24,
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      paddingLeft: 7,
    },
  },
}));
const HeaderLogo = React.memo((props) => {
  const classes = useStyles();
  return (
    <div className={classes.header_wrap_logo} id="header-logo">
      <div className={classes.header_logo}></div>
      <div
        className={classes.header_logo_title} >
        <p>Hichi kachi</p>
      </div>
    </div>
  );
});

export default HeaderLogo;
