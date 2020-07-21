import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image_logo from '../../../../assets/img/background/logo.png'
const useStyles = makeStyles((theme) => ({
  header_wrap_logo: {
    position: "absolute",
    zIndex : 10,
    top : 20,
    left: 80,
    display:"flex",
    alignItems : "center",
    [theme.breakpoints.down("xs")]:{
      left : 20,
      top : 10,
    }
  },
  header_logo :{
    width: 32,
    height: 32,
    backgroundSize : "contain",
    backgroundImage :   `url(${image_logo})`,
    backgroundRepeat : "no-repeat",
    backgroundPosition : "center",
    [theme.breakpoints.down("xs")] : {
      width : 18,
      height : 18
    } 
  },
  header_logo_title :{
    fontWeight : "bold",
    fontSize : 24,
    paddingLeft : 24,
    color : "#FFF",
    [theme.breakpoints.down("xs")] : {
      fontSize : 14,
      paddingLeft : 7,
    } 
  }
}))
const HeaderLogo = React.memo((props) => {
  const classes = useStyles();

  return(
      <div className={classes.header_wrap_logo} id='header-logo'>
        <div className={classes.header_logo}></div>
        <div className={`${classes.header_logo_title} ${props.scroll ? "header-contain-scroll" : ''} `}><p>Hichi kachi</p></div>
      </div>
  )
});


export default HeaderLogo;
