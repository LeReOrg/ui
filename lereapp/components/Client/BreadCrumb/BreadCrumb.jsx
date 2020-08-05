import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import LinkStyle from "@material-ui/core/Link";
import { capitalize } from "../../../utils/FunctionUses";

const useStyled = makeStyles((theme) => ({
  breadcrumb_main: {
    background: "#F3F4F3",
    padding: "14px 0 14px 80px",
  },
  breadcrumb_main_link: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    "&:hover": {
      cursor: "pointer",
      color: "#2FAF62 !important",
    },
  },
}));

const BreadCrumb = (props) => {
  const classes = useStyled();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb_main}>
      <Link href="/" as="/">
        <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
          Trang chủ
        </LinkStyle>
      </Link>
      <Link as={`/${props.activeBread}`} href="/[type_product]">
        <LinkStyle
          color="textPrimary"
          aria-current="page"
          className={classes.breadcrumb_main_link}
        >
          {props.activeBread && capitalize(props.activeBread)}
        </LinkStyle>
      </Link>
    </Breadcrumbs>
  );
};
export default BreadCrumb;
