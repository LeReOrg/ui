import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HeaderLogoStyled";

const useStyles = makeStyles(styles);

const HeaderLogo = React.memo((props) => {
  const classes = useStyles();
  return (
    <div className={classes.header_wrap_logo} id="header-logo">
        <a href='/'>
          <div className={classes.header_logo}></div>
        </a>

      <div className={classes.header_logo_title}>
        <p>Hichi kachi</p>
      </div>
    </div>
  );
});

export default HeaderLogo;
