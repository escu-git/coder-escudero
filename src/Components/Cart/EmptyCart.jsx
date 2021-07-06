import React from 'react'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
const EmptyCart = () => {
    return (
        <EmptyCartMessage>
            <h1>YOUR SHOPPING CART IS EMPTY!</h1>
            <span>Let's get those frames!</span>
            <NavLink to='/' style={{textDecoration: 'none', color:'inherit'}}><ShoppingBasketOutlinedIcon className="shoppingBasket"/></NavLink>
        </EmptyCartMessage>
    )
}

const EmptyCartMessage = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    .shoppingBasket{
        font-size:30em;
    }
    .shoppingBasket :hover{
        transition:400ms;
        color:green;
    }
    span{
        font-weight:bolder;
        text-transform:uppercase;
    }
`

export default EmptyCart
