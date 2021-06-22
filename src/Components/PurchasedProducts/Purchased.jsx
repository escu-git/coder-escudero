import React, { useCallback, useState, useEffect } from 'react'
import { useCart } from '../Contexts/CartContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../../firebase';
import styled from 'styled-components';
import { useAuth } from '../Contexts/AuthContext';
import PurchaseInfo from './PurchaseInfo';
import SignUp from '../Authentication/SignUp';
import { doc } from 'prettier';

const Purchased = (userInfo, totalPrice) => {
    const db = getFirestore();
    const cart = useCart();
    const auth = useAuth()
    const ordersCollection = db.collection('orders');
    const usersCollection = db.collection('users')
    const handlePurchase = useCallback(async event =>{
        
        const newOrder = {
            buyer: userInfo,
            items: cart.cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            price: totalPrice,
        }
        ordersCollection.add(newOrder)
    })
    const[customerInfo, setCustomerInfo]=useState({})
    useEffect(()=>{
        const db = getFirestore();
        const usersCollection = db.collection('users')
        usersCollection.get().then((res=>{
            const array = res.docs.map(doc=>({id:doc.id, ...doc.data()}))
            const filter = array.filter(doc=> doc.email === auth.currentUser.email)
            setCustomerInfo(filter[0])
        }))
    },[]);

    return (
        <PurchaseContainer>
            {auth.currentUser ? <PurchaseInfo name={customerInfo.name} surname={customerInfo.surname} phone={customerInfo.phone} email={customerInfo.email}price={cart.cart.totalPrice}/> : <SignUp/>}
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
display:flex;
`

export default Purchased
