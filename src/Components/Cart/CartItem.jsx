import React from 'react'
import styled from 'styled-components';
import {useCart} from '../Contexts/CartContext';
import ItemCount from '../Item/ItemCount';

const CartItem = ({details}) => {
    const cart = useCart()
    return (
        <CartItemDetails>
            <img src={details.pictureUrl} alt={details.alt}/>
            <div>
            <span>{details.title}</span>

            </div>
            <button onClick={()=>cart.removeItem(details)}>BORRAR ITEM</button>
        </CartItemDetails>
    )
}

const CartItemDetails = styled.div`
width:100%;
height:100%;
img{
    width:300px;
    height:300px;
}

`       

export default CartItem
