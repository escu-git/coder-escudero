import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {useCart} from '../../Contexts/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../Styles/styles.css';

const CartItem = ({details}) => {
    const[quantity, setQuantity] = useState(details.quantity)
    const cart = useCart()

    const handleQuantity = (value, details) =>{
        if( value === +1 &&  quantity === details.stock) {return alert('You cannot add more items')}
        const newValue = details.quantity + value;
        setQuantity(newValue)
        const newDetails = {...details, quantity:value}
        cart.addItem(newDetails)
    }
    useEffect(()=>{
        quantity===0 && cart.removeItem(details)
    }, [handleQuantity])

    return (
        <CartItemDetails className='cartItemDetails'>
            <img src={details.image} alt={details.alt}/>
            <div className='itemDetails'>
                <span id='title'>{details.title}</span>
                <span id='description'>{details.description}</span>
                <span id='quantity'>{`Quantity: ${details.quantity}`}</span>
                <span id='price'>{`$${details.price*details.quantity}`}</span>
            </div>
            <div className='cartButtons'>
                <DeleteIcon id="deleteIcon"  onClick={()=>cart.removeItem(details)} variant="outlined" color="primary"/>
                <div>
                    <Button variant="outlined" color="primary" onClick={()=>{handleQuantity(+1,details)}}>+</Button>
                    <span>{quantity}</span>
                    <Button variant="outlined" color="secondary" onClick={()=>{handleQuantity(-1,details)}}>-</Button>
                </div>
            </div>
        </CartItemDetails>
    )
}

const CartItemDetails = styled.div`

`       

export default CartItem
