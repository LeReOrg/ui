import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import faShoppingBag  from '@fortawesome/fontawesome-free-solid/faShoppingBag';
import ShoppingBag from '../../../../assets/img/background/shopping_bag.svg';
const HeaderCart = () => {
    return (
        <div>
            <div style={{background : `url(${ShoppingBag})`,height : "24px",width:"24px" }}>
            
            </div>
        </div>
    );
};

export default HeaderCart;