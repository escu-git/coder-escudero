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
import Loading from '../Loading/Loading';
const Purchased = () => {
    const[orderId, setOrderId]=useState(null)
    const[loading, setLoading]=useState(true)
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
                {purchased ? <NavLink to='/'><button >GET BACK TO HOME!</button></NavLink> : <button onClick={()=>handlePurchase()}>CONFIRM</button>}
                {purchased? loading?<Loading/> : <h2>Order ID: {orderId}</h2>: null}
            </div>
        </div>: <Login/>}
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
height:100%;
`

export default Purchased
