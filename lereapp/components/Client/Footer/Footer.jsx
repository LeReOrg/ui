import React from "react";
import { makeStyles } from "@material-ui/core";
import image_logo from "../../../assets/logo.png";
import Link from 'next/link'
const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer_main: {
      backgroundColor: "#F3F4F3",
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
    footer_content: {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: 28,
      paddingBottom: 28,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        paddingTop: 24,
        paddingLeft: 23,
        paddingBottom: 12,
      },
    },
    footer_logo: {
      width: 24,
      height: 24,
      backgroundSize: "contain",
      backgroundImage: `url(${image_logo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      [theme.breakpoints.down("xs")]: {
        width: 18,
        height: 18,
        marginBottom: 8,
      },
    },
    footer_contact: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "unset",
        paddingBottom: 6,
      },
    },
    footer_phone: {
      fontSize: "bold",
      paddingRight: 12,
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 0,
      },
    },
    footer_mail: {
      fontSize: "bold",
      paddingLeft: 12,
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 0,
      },
    },
    footer_term: {
      color: "#111E16",
      fontSize: 12,
      fontWeight: "bold",
    },
  }));
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
          <Link href="/term"><a>Terms & Policy</a></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
