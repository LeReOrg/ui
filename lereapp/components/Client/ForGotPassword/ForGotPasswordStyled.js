import React from "react";
import { makeStyles, Button } from "@material-ui/core";
const styles = (theme) => ({
  main_page_login: {
    width: "70%",
    margin: "30px auto",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  main_page_content: {
    width: "50%",
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  main_page_image: {
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
  main_page_background: {
    paddingTop: 70,
  },
  main_page_contentTitle: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 24,
  },
  emailTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
  },
  emailFormLogin: {
    border: "1px solid #C3C7C5",
    borderRadius: 4,
    marginBottom: 16,
    marginTop: 4,
    width: "100%",
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  loginButton: {
    backgroundColor: (props) =>
      props.isDisabled == true ? "#E7E9E8" : "#2FAF62",
    borderRadius: 4,
    padding: "9px 16px",
    width: "100%",
    border: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    color: (props) => (props.isDisabled == true ? "#C3C7C5" : "#FFFFFF"),
  },
});
const useStyles = makeStyles(styles);
export function MyButton(props) {
  const { type, ...other } = props;
  const classes = useStyles(props);
  return <Button type={type} className={classes.loginButton} {...other} />;
}

export default styles;
