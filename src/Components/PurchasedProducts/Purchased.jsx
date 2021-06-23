import React, { useCallback, useState, useEffect } from 'react'
import { useCart } from '../Contexts/CartContext';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../../firebase';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
import PurchaseInfo from './PurchaseInfo';
import Login from '../Authentication/Login';
import ItemDetailPurchase from './ItemDetailPurchase';

const Purchased = () => {
    const[orderId, setOrderId]=useState(null)
    const db = getFirestore();
    const cart = useCart();
    const auth = useAuth()
    const ordersCollection = db.collection('orders');
    const usersCollection = db.collection('users')
    const[purchased, setPurchased]=useState(false);
    
    const handlePurchase = async() =>{
        setPurchased(true)
        const user = firebase.auth().currentUser;
        let {displayName, uid, email, phoneNumber} = user;
        const products = cart.cart.addedItems.map(item=>({id:item.id, title:item.title, price:item.price, quantity:item.quantity}))
        console.log(products)
        const newOrder = {
            buyer: {
                name:displayName,
                email:email,
                phone:phoneNumber,
                userId:uid
            },
            purchase:products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        ordersCollection.add(newOrder).then(({id})=>{
            setOrderId(id);
        }).catch((err)=>{
            console.log(err)
        })
    }  

    return (
        <PurchaseContainer>
        <div className='userData'>
            {auth.currentUser ? <PurchaseInfo name={auth.currentUser.displayName} email={auth.currentUser.email} price={cart.cart.totalPrice}/> : <Login/>}
        </div>
        <div className='productData'>
            <h1>PRODUCTS</h1>
            {cart.cart.addedItems?.map(x=><ItemDetailPurchase className="itemDetailPurchase" image={x.image} title={x.title} alt={x.alt} price={x.price} quantity={x.quantity} />)}
            {purchased ? <NavLink to='/'><button >GET BACK TO HOME!</button></NavLink> : <button onClick={()=>handlePurchase()}>CONFIRM</button>}
            {purchased && <h2>Tu orden es: ${orderId}</h2>}
        </div>
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
display:flex;
flex-direction:row
justify-content:center;
align-items:center;
.userData{
    width:50%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-right:2px solid black;
}
.productData{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    height:100vh;
    border-left:2px solid black;
}
button{
    width:200px;
    margin:auto;
}
.itemDetailPurchase{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
}
`

export default Purchased
