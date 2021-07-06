import React from 'react';
import {useCart} from '../../Contexts/CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import '../../Styles/styles.css';
const Cart = () => {
    const cart = useCart()
    const cartArray = cart.cart.addedItems;

    return (
        <CartSection className='cartSection'>
            <h1>CART</h1>
            {cartArray.map((x)=>{
                return <CartItem key={x.id} details={x}></CartItem>
            })}
            <div className="cartDetails">
            <button className='btn' onClick={cart.clearCart}>CLEAR CART</button>
            <span className='totalPrice'>
                {`$${cart.cart.totalPrice}`}
            </span>
            <NavLink to='/purchase'><button className="btn">CONTINUE TO PURCHASE</button></NavLink>
            </div>
        </CartSection>
    )
}

const CartSection = styled.div`

`

export default Cart