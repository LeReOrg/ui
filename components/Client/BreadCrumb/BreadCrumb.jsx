import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import LinkStyle from "@material-ui/core/Link";
import { capitalize } from "../../../utils/FunctionUses";
import styles from "./BreadCrumbStyled";
import { Breadcrumb } from "rsuite";

const BreadCrumb = ({ listBreadCrumb }) => {
  const useStyled = makeStyles(styles);
  // console.log(listBreadCrumb);
  // const arrayBreadCrumb = [];
  // arrayBreadCrumb.push(props.listBreadCrumb);
  // const item = props.activeBread;
  // console.log(arrayBreadCrumb);
  const classes = useStyled();
  // const renderBreadcrumb = () =>
  //   arrayBreadCrumb?.map((item, index) => (
  //       <Link href={`/${item}`} as="/">
  //         <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
  //           <span>{item}</span>
  //         </LinkStyle>
  //       </Link>
  //   ));
  return (
    <Breadcrumb className={classes.breadcrumb_main}>
      <Link href="/" as="/">
        <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
          <span>Trang chủ</span>
        </LinkStyle>
      </Link>
      {/* {listBreadCrumb?.map((item, index) => (
        <Link
          href="/type_product/[index]"
          as={`/type_product/${item.id}`}
          key={item}
        >
          <LinkStyle color="inherit" className={classes.breadcrumb_main_link}>
            <span className={classes.breadcrumb_main_linkspan}>
              {item.itemName}
            </span>
          </LinkStyle>
        </Link>
      ))} */}
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
