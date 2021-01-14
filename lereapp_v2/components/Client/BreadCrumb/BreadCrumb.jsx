import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import LinkStyle from "@material-ui/core/Link";
import { capitalize } from "../../../utils/FunctionUses";
import styles from "./BreadCrumbStyled";
import { Breadcrumb } from "rsuite";

const BreadCrumb = (props) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const renderBreadcrumb = (item) => (
    item.map((item,index) =>{
      <Breadcrumb.Item>{item}</Breadcrumb.Item>;
    })
  );
  return (
    <Breadcrumb className={classes.breadcrumb_main}>
      <Breadcrumb.Item>
        <Link href="/" as="/">
          <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
            <span>Trang chủ</span>
          </LinkStyle>
        </Link>
      </Breadcrumb.Item>
      {renderBreadcrumb()}
    </Breadcrumb>
    // <Breadcrumbs aria-label="breadcrumb"  className={classes.breadcrumb_main}>
    //   <Link href="/" as="/">
    //     <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
    //      <span>Trang chủ</span>
    //     </LinkStyle>
    //   </Link>
    //   <Link as={`/type_product/${props.id}`}  href="/[type_product]/[index]">
    //     <LinkStyle
    //       color="textPrimary"
    //       aria-current="page"
    //       className={classes.breadcrumb_main_link}
    //     >
    //         <span>{props.activeBread && capitalize(props.activeBread)}</span>
    //     </LinkStyle>
    //   </Link>
    // </Breadcrumbs>
  );
};
export default BreadCrumb;
