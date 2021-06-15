import React from 'react'
import styled from 'styled-components';
import {useCart} from '../Contexts/CartContext';
const CartItem = (details) => {
    const cart = useCart()
    return (
        <CartItemDetails>
            <span>{details.title}</span>
            <img src={details.pictureUrl} alt={details.alt}/>
            <button onClick={()=>cart.removeItem(details.id)}>BORRAR ITEM</button>
        </CartItemDetails>
    )
}

const CartItemDetails = styled.div`
width:100%
img{
    width:300px
    height:300px;
}

`       

export default CartItem
