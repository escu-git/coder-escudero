import React from 'react';
import '../../Styles/CartWidget.css';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useCart} from '../Contexts/CartContext'

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const Logo = ()=> {
    const cart = useCart();
    console.log(cart.cart.totalQuantity)
    return(
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.cart.totalQuantity} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    );
};


  export default Logo
