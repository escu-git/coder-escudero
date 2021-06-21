import React from 'react';
import {useCart} from '../Contexts/CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';

const Cart = () => {
    const cart = useCart()
    const cartArray = cart.cart.addedItems;
    console.log(cartArray)
    
    return (
        <CartSection>
            <h1>CART</h1>
            {cartArray.map((x)=>{
                console.log(x)
                return <CartItem key={x.id} details={x}></CartItem>
            })}
            <div className="cartDetails">
            <button onClick={cart.clearCart}>CLEAR CART</button>
            <span className='totalPrice'>
                {`$${cart.cart.totalPrice}`}
            </span>
            <button onClick={()=>console.log('SHOULD GO TO PAYMENT SECTION')} >PURCHASE CART</button>
            </div>
        </CartSection>
    )
}

const CartSection = styled.div`
display:flex;
justify-content:flex;
flex-direction:column;
width:90%;
margin:auto;
box-shadow:5px 5px 5px 5px lightgrey;
.cartDetails{
    display:flex;
    flex-direction:row;
    .totalPrice{
        text-align:right;
        font-size:3rem;
        margin:30px auto;
    }
}
button{
    width:200px;
    margin:30px auto;
}
`

export default Cart