import React,{useState, useEffect} from 'react';
import {useCart} from '../Contexts/CartContext';
import CartItem from './CartItem';


const Cart = () => {
    const cart = useCart()
    const cartArray = cart.cart.addedItems;
    console.log(cartArray)
    
    return (
        <div>
            <h1>THIS IS THE CART SECTION</h1>
            {cartArray.map((x)=>{
                {console.log(x)}
                return <CartItem key={x.id} details={x}></CartItem>
            })}

            <button onClick={cart.clearCart} >CLEAR CART</button>
        </div>
    )
}

export default Cart