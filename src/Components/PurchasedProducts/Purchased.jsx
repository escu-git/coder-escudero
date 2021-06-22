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

const Purchased = (userInfo, totalPrice) => {
    const[orderId, setOrderId]=useState(null)
    const db = getFirestore();
    const cart = useCart();
    const auth = useAuth()
    const ordersCollection = db.collection('orders');
    const usersCollection = db.collection('users')
    const[purchased, setPurchased]=useState(false);
    
    const handlePurchase = () =>{
        setPurchased(true)
        const user = firebase.auth().currentUser;
        let displayName, uid, email, phoneNumber = user;
        const products = cart.cart.addedItems.map(item=>({id:item.id, title:item.title, price:item.price}))
        console.log(products)
        const newOrder = {
            buyer: {
                name:displayName,
                email:email,
                phone:phoneNumber,
                userId:uid
            },
            purchase:[products],
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
            {auth.currentUser ? <PurchaseInfo name={auth.currentUser.displayName} email={auth.currentUser.email} price={cart.cart.totalPrice}/> : <Login fromCart={true}/>}
            <button onClick={()=>handlePurchase()}>CONFIRM</button>
            {purchased && <h2>Tu orden es: ${orderId}</h2>}
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
display:flex;
`

export default Purchased
