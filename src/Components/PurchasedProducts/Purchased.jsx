import React, {useState} from 'react'
import { useCart } from '../../Contexts/CartContext';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase/app';
import '../../Styles/styles.css'
import 'firebase/firestore';
import {getFirestore} from '../../firebase';
import styled from 'styled-components';
import { useAuth } from '../../Contexts/AuthContext';
import PurchaseInfo from './PurchaseInfo';
import Login from '../Authentication/Login';
import ItemDetailPurchase from './ItemDetailPurchase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CircularUnderLoad from '../Loading/Spinner';
const Purchased = () => {
    const[orderId, setOrderId]=useState(null)
    const[loading, setLoading]=useState(true)
    const db = getFirestore();
    const cart = useCart();
    const auth = useAuth()
    const ordersCollection = db.collection('orders');
    const[purchased, setPurchased]=useState(false);
    
    const handlePurchase = async() =>{
        setPurchased(true)
        const user = firebase.auth().currentUser;
        let {displayName, uid, email, phoneNumber} = user;
        const products = cart.cart.addedItems.map(item=>({id:item.id, description:item.description, image:item.image, title:item.title, price:item.price, quantity:item.quantity}))
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
            cart.clearCart()
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <PurchaseContainer className='purchaseContainer'>
        {auth.currentUser ? <div className='userDiv'>
            <div className='userData'>
                <PurchaseInfo name={auth.currentUser.displayName} email={auth.currentUser.email} price={cart.cart.totalPrice}/> 
            </div>
            <div className='productData'>
                {purchased ?<h1>YOUR ORDER HAS BEEN COMPLETED</h1> : <h1>PRODUCTS</h1>}
                <div className='only-products'>
                    {cart.cart.addedItems?.map(x=><ItemDetailPurchase className="itemDetailPurchase" image={x.image} title={x.title} alt={x.alt} price={x.price} quantity={x.quantity} />)}
                </div>
                <div>
                {purchased ? 
                <NavLink to='/' style={{color:'inherit', textDecoration:'none'}}>
                    <div id='confirmBtn' onClick={()=>handlePurchase()}>
                        <HomeIcon id='checkIcon'/>
                        <span>HOME</span>
                    </div>
                </NavLink> : 
                <div id='confirmBtn' onClick={()=>handlePurchase()}>
                    <CheckCircleIcon id='checkIcon'>CONFIRM</CheckCircleIcon>
                <span>CONFIRM</span>
                </div>}
                </div>
                {purchased? loading?<CircularUnderLoad/> : 
                <div className='orderInfo'>
                    <ReceiptIcon id='receiptIcon'/>
                    <span id='orderId'>Order ID: {orderId}</span>
                </div>: 
                null}
            </div>
        </div>: <Login/>}
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`

`

export default Purchased
