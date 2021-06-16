import React from 'react'
import {useCart} from '../Contexts/CartContext'
import EmptyCart from './EmptyCart'
import Cart from './Cart'
import styled from 'styled-components';

const CartContainer = () => {
    const cart = useCart()
    return (
        <Cont>
            {cart.cart.totalQuantity ===0 ? <EmptyCart/> : <Cart/>}
        </Cont>
    )
}

const Cont = styled.div`
    width:100%;

`

export default CartContainer
