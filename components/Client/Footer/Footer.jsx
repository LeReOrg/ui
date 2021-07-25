import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import styles from "./FooterStyled";

const Footer = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <footer className={classes.footer_main}>
      <div className={classes.footer_content}>
        <div className={classes.footer_logo}></div>
        <div className={classes.footer_contact}>
          <div className={classes.footer_phone}>
            Phone: <span style={{ fontWeight: "bold" }}>+84 123 4567 99</span>
          </div>
          <div className={classes.footer_mail}>
            Email: <span style={{ fontWeight: "bold" }}>info@lere.com</span>
          </div>
        </div>
        <div className={classes.footer_term}>
          <Link href="/term">
            <a>Terms & Policy</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
