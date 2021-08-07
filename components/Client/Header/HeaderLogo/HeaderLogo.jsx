import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HeaderLogoStyled";
import Link from "next/link";

const HeaderLogo = React.memo((props) => {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  return (
    <Link href={`/`}>
      <a>
        <div className={classes.header_wrap_logo} id="header-logo">
          <div className={classes.header_logo}></div>
          <div className={classes.header_logo_title}>
            <p>Hichi kachi</p>
          </div>
        </div>
      </a>
    </Link>
  );
});

export default HeaderLogo;
