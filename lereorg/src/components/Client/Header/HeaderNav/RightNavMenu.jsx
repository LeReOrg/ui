import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HeaderCart from '../HeaderCart/HeaderCart';
const RightNav = styled.ul`
        list-style: none;
        display : flex;
        flex-flow  : row nowrap;
        margin-bottom : 0 ;
        margin-right  : 10px;
        align-items: center;
        li {
            padding : 0px 23px;
            &:nth-child(3){
                display: flex;
                background-color: rgb(47, 175, 98);
                border-radius: 4px;
                padding: 10px 16px;
                align-items: center;
                margin-left: 25px;
                color : #FFF !important;
            }
            a {
                color : black;
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
            margin-right  : 0;
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
                &:nth-child(3){
                    display : none;
                }
            }
          
        }
`;
const useStyles = makeStyles((theme) =>({ 
    right_nav_main : {
        display : "flex",
        
    }
}))

const RightNavMenu = ({...props}) => {
    const classes = useStyles();
    return (
        <div className={classes.right_nav_main}>
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
                <Link  to="/register" style={{color: "#FFF"}}>
                    Đăng sản phẩm
                </Link>
                </li>
            </RightNav>
            <HeaderCart />
        </div>
    );
};

export default RightNavMenu;