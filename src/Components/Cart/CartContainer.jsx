import React,{useState, useEffect}  from 'react'
import {useCart} from '../../Contexts/CartContext'
import EmptyCart from './EmptyCart'
import Cart from './Cart'
import styled from 'styled-components';
import Loading from '../Loading/Loading';

const CartContainer = () => {
    const [loading, setLoading] = useState(true);
    const cart = useCart()

    useEffect(()=>{
        setLoading(false)
    },[cart])
    return (
        <Cont>
            {loading? <Loading/>: cart.cart.totalQuantity ===0 ? <EmptyCart/> : <Cart/> }
        </Cont>
    )
}

const Cont = styled.div`
    width:100%;

`

export default CartContainer
