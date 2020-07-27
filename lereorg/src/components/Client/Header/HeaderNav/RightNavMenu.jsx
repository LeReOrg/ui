import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderCart from '../HeaderCart/HeaderCart';
const RightNav = styled.ul`
        list-style: none;
        display : flex;
        flex-flow  : row nowrap;
        margin-bottom : 0 ;
        align-items: center;
        li {
            padding : 0px 23px;
            &:nth-child(3){
                display: flex;
                background-color: rgb(47, 175, 98);
                border-radius: 4px;
                padding: 10px 15px;
                align-items: center;
                margin-left: 25px;
            }
            a {
                color : black;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 22px;
                &:nth-child(3){
                    color : #FFFFFF;
                }
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
                    <Link to="/contact">
                        Liên hệ
                    </Link>
                </li>
                <li>
                    <Link  to="/login">
                        Tài khoản
                    </Link> 
                </li>
                <li>
                <Link  to="/register">
                    Đăng sản phẩm
                </Link>
                </li>
                <li>
                    <HeaderCart />
                </li>
            </RightNav>
    );
};

export default RightNavMenu;