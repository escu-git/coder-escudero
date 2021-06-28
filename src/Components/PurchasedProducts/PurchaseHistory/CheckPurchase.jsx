import React, {useState, useEffect} from 'react'
import { useAuth } from '../../../Contexts/AuthContext';
import { getFirebase, getFirestore } from '../../../firebase';
import Order from './Order'
const CheckPurchase = () => {
    const auth = useAuth();
    const db= getFirestore();

    const firebase = getFirebase()
    const [orders, setOrders]=useState(null);

    useEffect(()=>{
    if(auth.currentUser){
        const ordersCollection = db.collection('orders');
        const userId = auth.currentUser.uid;
        const purchasesArray = ordersCollection.where('buyer.userId', '==', userId)
        purchasesArray.get().then((res)=>res.docs.map(x=>({id:x.id, ...x.data()}))).then((res)=>{
            const orders = (res);
            setOrders(orders);
            console.log(orders.map(x=>x.id))
        }).catch(err=>console.log(err))
    }else{setOrders(null)}
    },[])
    return (
        <>
        {orders?.map(order=>{return(<Order data={order}/>)})}
        </>
    )
}

export default CheckPurchase
