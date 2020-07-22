import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const RightNav = styled.ul`
        list-style: none;
        display : flex;
        flex-flow  : row nowrap;
        align-items: center;
        li {
            padding : 18px 23px;
            &:nth-child(4){
                display: flex;
                background-color: rgb(47, 175, 98);
                border-radius: 4px;
                padding: 10px 15px;
                align-items: center;
                margin-left: 25px;
            }
            a {
                color : #fff;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 22px;
            }
        }
        @media (max-width : 768px){
            flex-flow : column nowrap;
            background-color : #FFFFFF;
            position : fixed;
            z-index: 3;
            transform : ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
            top : 0;
            right : 0;
            height : 100vh;
            width : 50%;
            align-items: flex-end;
            padding-top : 3.5rem;
            li {
               
                a {
                    color : black;
                }
                &:nth-child(4){
                    display : none;
                }
            }
          
        }
`;
const RightNavMenu = ({...props}) => {
    return (
             <RightNav open ={props.open} >
                <li>
                    <Link className={` ${props.scroll ? "black-color" : ""}`} to="/contact">
                        Liên hệ
                    </Link>
                </li>
                <li>
                    <Link className={`${props.scroll ? "black-color" : ""}`} to="/login">
                    Đăng nhập
                    </Link> 
                </li>
                <li>
                <Link className={`${props.scroll ? "black-color" : ""}`} to="/register">
                  Đăng ký
                </Link>
                </li>
                <li>
                <Link to="/register">
                  Đăng sản phẩm
                </Link>
                </li>
            </RightNav>
    );
};

export default RightNavMenu;