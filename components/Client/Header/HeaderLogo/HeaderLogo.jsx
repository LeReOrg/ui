import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HeaderLogoStyled";
import Link from "next/link";
import image_logo from "../../../../assets/logo.jpeg";
const HeaderLogo = React.memo((props) => {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  return (
    <Link href={`/`}>
      <a>
        <div className={classes.header_wrap_logo} id="header-logo">
          <img src={image_logo} alt="logo" className={classes.header_logo} />
        </div>
      </a>
    </Link>
  );
});

export default HeaderLogo;
