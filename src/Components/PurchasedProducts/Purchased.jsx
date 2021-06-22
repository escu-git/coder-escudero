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
    const db = getFirestore();
    const cart = useCart();
    const auth = useAuth()
    const ordersCollection = db.collection('orders');
    const usersCollection = db.collection('users')
    const[purchased, setPurchased]=useState(false);

    const handlePurchase = useCallback(async event =>{
        event.preventDefault();
        const newOrder = {
            buyer: ,
            items: cart.cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            price: totalPrice,
        }
        try{


        }
        ordersCollection.add(newOrder)
        setPurchased(true)
        console.log(purchased)
    })
    const[customerInfo, setCustomerInfo]=useState({})
    useEffect(()=>{
        if(auth.currentUser){const db = getFirestore();
        const usersCollection = db.collection('users')
        usersCollection.get().then((res=>{
            const array = res.docs.map(doc=>({id:doc.id, ...doc.data()}))
            const filter = array.filter(doc=> doc.email === auth.currentUser.email)
            setCustomerInfo(filter[0])
        }))}
    },[]);

    return (
        <PurchaseContainer>
            {auth.currentUser ? <PurchaseInfo name={customerInfo.name} surname={customerInfo.surname} phone={customerInfo.phone} email={customerInfo.email}price={cart.cart.totalPrice}/> : <Login fromCart={true}/>}
            <button onClick={()=>handlePurchase}>CONFIRM</button>
            {purchased && <PurchaseInfo name="HOLA"></PurchaseInfo>}
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
display:flex;
`

export default Purchased
