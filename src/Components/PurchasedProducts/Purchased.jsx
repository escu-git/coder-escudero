import React from 'react'
import { useCart } from '../Contexts/CartContext';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from '../../firebase';


const Purchased = (userInfo, totalPrice) => {
    const db = getFirestore();
    const cart = useCart();
    const orders = db.collection('orders');

    const newOrder = {
        buyer: userInfo,
        items: cart.cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        price: totalPrice,
    }
    return (
        <div>
            YOUR PRODUCTS WILL BE SENT TO YOUR DECLARED ADDRESS
        </div>
    )
}

export default Purchased
