import React from 'react';
import {useCart} from '../Contexts/CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

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
            <button className='btn' onClick={cart.clearCart}>CLEAR CART</button>
            <span className='totalPrice'>
                {`$${cart.cart.totalPrice}`}
            </span>
            <NavLink to='/payment'><button className="btn">CONTINUE TO PURCHASE</button></NavLink>
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
    align-items:center;
    justify-content:space-around;
    width:40%;
    margin:auto;
    .totalPrice{
        text-align:right;
        font-size:3rem;
        margin:30px auto;
    }
}
.btn{
    width:200px;
    height:40px;
}
`

export default Cart