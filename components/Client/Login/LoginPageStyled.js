import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import FaceBookIcon from "../../../assets/facebookIcon.svg";
import GmailIcon from "../../../assets/gmailIcon.svg";
const styles = (theme) => ({
  main_page_login: {
    marginTop: 24,
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      maxWidth: "60%",
      marginTop: 25,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 30,
      maxWidth: "100%",
      marginRight: 30,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  main_page_content: {
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "65%",
    },
  },
  main_page_image: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  main_page_background: {
    paddingTop: 70,
  },
  main_page_contentTitle: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 24,
    lineHeight: "32px",
  },
  emailTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
  },
  facebookButton: {
    position: "relative",
    border: "1px solid #E7E9E8",
    borderRadius: 4,
    paddingTop: 9,
    paddingBottom: 9,
    fontSize: 16,
    color: "#888E8A",
    marginBottom: 20,
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#b6c2d4",
    },
  },
  gmailButton: {
    position: "relative",
    border: "1px solid #E7E9E8",
    borderRadius: 4,
    paddingTop: 9,
    paddingBottom: 9,
    fontSize: 16,
    color: "#888E8A",
    textAlign: "center",
    marginBottom: 24,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#b6c2d4",
    },
  },
  faceBookIcon: {
    background: `url("${FaceBookIcon}") no-repeat`,
    backgroundSize: "cover",
    position: "absolute",
    left: 12,
    height: 20,
    width: 20,
    top: 10,
  },
  gmailIcon: {
    background: `url("${GmailIcon}") no-repeat`,
    backgroundSize: "cover",
    position: "absolute",
    left: 12,
    height: 20,
    width: 20,
    top: 10,
  },
  passwordTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
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
  passwordFormLogin: {
    border: "1px solid #C3C7C5",
    borderRadius: 4,
    marginBottom: 12,
    marginTop: 4,
    width: "100%",
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
    color: "#2F80ED",
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: (props) => (props.isDisabled ? "#E7E9E8" : "#2FAF62"),
    borderRadius: 4,
    padding: "9px 16px",
    width: "100%",
    border: "none",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "initial",
    color: (props) => (props.isDisabled ? "#C3C7C5" : "#FFFFFF"),
    [theme.breakpoints.down("xs")]: {
      padding: "5px 10px",
      fontSize: 14,
    },
    "&:hover": {
      opacity: "0.8",
      backgroundColor: "#2FAF62",
    },
  },
});
const useStyles = makeStyles(styles);
export function MyButton(props) {
  const { type, onPageChange, ...other } = props;

  const classes = useStyles(props);
  return (
    <Button
      type={type}
      className={classes.loginButton}
      onClick={onPageChange}
      {...other}
    />
  );
}

export default styles;
