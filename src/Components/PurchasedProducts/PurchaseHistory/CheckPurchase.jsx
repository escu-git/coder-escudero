import React, {useState, useEffect} from 'react'
import { useAuth } from '../../../Contexts/AuthContext';
import {getFirestore } from '../../../firebase';
import Loading from '../../Loading/Loading';
import Order from './Order';
import EmptyCart from '../../Cart/EmptyCart';
const CheckPurchase = () => {
    const auth = useAuth();
    const db= getFirestore();
    const [orders, setOrders]=useState(null);
    const[loading, setLoading]=useState(true)

    useEffect(()=>{
    if(auth.currentUser){
        const ordersCollection = db.collection('orders');
        const userId = auth.currentUser.uid;
        const purchasesArray = ordersCollection.where('buyer.userId', '==', userId)
        purchasesArray.get().then((res)=>res.docs.map(x=>({id:x.id, ...x.data()}))).then((res)=>{
            const orders = (res);
            setOrders(orders);
            setLoading(false)
        }).catch(err=>console.log(err))
    }else{setOrders(null)}
    },[])

    console.log(orders)
    return (
        <>
        <h1>YOUR PURCHASES HISTORY</h1>
        {orders ? <>{orders?.map(order=>{return(<Order data={order}/>)})}</> : loading? <Loading/> : <EmptyCart/> }
        </>
        
    )
}

export default CheckPurchase
