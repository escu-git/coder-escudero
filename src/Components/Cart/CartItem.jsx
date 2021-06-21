import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useCart} from '../Contexts/CartContext';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = ({details}) => {
    const cart = useCart()
    const[quantity, setQuantity] = useState(details.quantity)
    
    const handleQuantity = (value, details) =>{
        const newValue = details.quantity + value;
        setQuantity(newValue)
        const newDetails = {...details, quantity:value}
        cart.addItem(newDetails)
    }
    useEffect(()=>{
        quantity===0 && cart.removeItem(details)
    }, [handleQuantity])

    return (
        <CartItemDetails>
            <img src={details.image} alt={details.alt}/>
            <div className='itemDetails'>
            <span>{details.title}</span>
            <span>{details.description}</span>
            <span>{`Quantity: ${details.quantity}`}</span>
            <span>{`$${details.price*details.quantity}`}</span>
            </div>
            <div className='cartButtons'>
                <DeleteIcon className="deleteIcon"  onClick={()=>cart.removeItem(details)} variant="outlined" color="primary">BORRAR ITEM</DeleteIcon>
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
border-top: 1px solid grey;
padding:1em;
width:80%;
height:100%;
margin:2em auto;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;

img{
    width:200px;
    height:200px;
    border:1px solid black;
    border-radius:10px;
    box-shadow:10px 5px 5px lightgrey;
}
.itemDetails{
    display:flex;
    flex-direction:column;
    width:30%;
    height:100%;
    span{
        font-weight:bold;
        font-size:2rem;
        text-transform:uppercase;
        text-align:center;
    }
}

.cartButtons{
    width:25%;
    height:70%;
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        button{
            width:10%;
            height:10%;
        }
        span{
            font-size:1.5rem;
        }
    }
    }

}

`       

export default CartItem
