import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import HeaderCart from "../HeaderCart/HeaderCart";
import ShowLogin from "../ShowLogin/ShowLogin";
import { useState } from "react";
const RightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0;
  margin-right: 10px;
  align-items: center;
  @media (max-width : 1024px) {
    margin-right: 0;
    padding-left : 0;
  }
  li {
    padding: 0px 23px;
    @media (max-width : 1024px) {
      padding: 0px 20px;
    }
    a {
      color: black;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      &:hover {
        color: #2faf62;
      }
    }
  }
  @media (max-width: 890px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    z-index: 3;
    margin-right: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    align-items: flex-end;
    padding-top: 5rem;
    li {
      padding-top : 25px;
      a {
        color: black;
      }
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;
const useStyles = makeStyles((theme) => ({
  right_nav_main: {
    display: "flex",
  },
  uploadproduct: {
    color: "#2faf62 !important",
  },
  right_nav_main_test: {
    position: "absoulute",
  },
  showLogin :{
    position : "relative",
    "&:hover": {
      cursor : "pointer"
    }
  },

}));

const RightNavMenu = ({ ...props }) => {
  const classes = useStyles();
  const [isHovering,setIsHovering] = useState(false);

  return (
    <div className={classes.right_nav_main}>
      <RightNav open={props.open}>
        <li>
          <Link href="/contact">
            <a>Về chúng tôi</a>
          </Link>
        </li>
        <li
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={classes.showLogin}
        >
          <a>Tài khoản</a>
          {isHovering && <ShowLogin />}
        </li>
        <li>
          <Link href="/uploadproduct">
            <a className={classes.uploadproduct}>Đăng sản phẩm</a>
          </Link>
        </li>
      </RightNav>

      <HeaderCart />
    </div>
  );
};

export default RightNavMenu;
