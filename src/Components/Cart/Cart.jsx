import React from 'react'
import {useCart} from '../Contexts/CartContext'
//'/cart'
const Cart = () => {
    const cart = useCart()
    return (
        <div>
            <h1>THIS IS THE CART SECTION</h1>

            <button onClick={cart.clearCart} >CLEAR CART</button>
        </div>
    )
}

export default Cart