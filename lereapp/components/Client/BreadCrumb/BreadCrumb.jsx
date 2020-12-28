import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import LinkStyle from "@material-ui/core/Link";
import { capitalize } from "../../../utils/FunctionUses";
import styles from "./BreadCrumbStyled";

const useStyled = makeStyles(styles);

const BreadCrumb = (props) => {
  const classes = useStyled();
  return (
    <Breadcrumbs aria-label="breadcrumb"  className={classes.breadcrumb_main}>
      <Link href="/" as="/">
        <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
         <span>Trang chủ</span>
          
        </LinkStyle>
      </Link>
      <Link as={`/type_product/${props.id}`}  href="/[type_product]/[index]">
        <LinkStyle
          color="textPrimary"
          aria-current="page"
          className={classes.breadcrumb_main_link}
        >
            <span>{props.activeBread && capitalize(props.activeBread)}</span>

        </LinkStyle>
      </Link>
    </Breadcrumbs>
  );
};
export default BreadCrumb;
