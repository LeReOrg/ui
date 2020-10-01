import React from 'react';
import { makeStyles } from "@material-ui/styles";
const Cart = () => {
    const useStyled = makeStyles((theme) => ({
      main_cart__title: {
        marginBottom: 16,
        fontStyle: "normal",
        fontSize: 24,
      },
      main_cart: {
        width: "90%",
        margin: "32px auto 0 auto",
      },
      main_cart__info: {
        borderRadius: 8,
        border: "1px solid rgba(0, 0, 0, 0.15)",
      },
      main_cart__summary: {
        borderRadius: 8,
        border: "1px solid rgba(0, 0, 0, 0.15)",
      },
      main_cart__content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      main_cart__infoItem :{
          
      }
    }));
     const classes = useStyled();
     const testItem = [
         {
             id : "1",
             name : "testa",
             cungcap : "dulichaa",
             price : "100000",
             coc : "10000",
             songay : "1",
             soluong : "1"
         },
           {
             id : "2",
             name : "testb",
             cungcap : "dulichaa",
             price : "100000",
             coc : "10000",
             songay : "1",
             soluong : "2"
         },
     ]
     const renderItemCart  = () => (
                 testItem.map((item,index) => (
                    <CartItem item ={item} key = {index} />
                 ))

     )
     
    return (
      <div className={classes.main_cart}>
        <h1 className={classes.main_cart__title}>Giỏ hàng của bạn</h1>
        <div className={classes.main_cart__content}>
          <div className={classes.main_cart__info}>
            <div className={classes.main_cart__infoItem}>{renderItemCart()}</div>
          </div>
          <div className={classes.main_cart__summary}></div>
        </div>
      </div>
    );
};

export default Cart;