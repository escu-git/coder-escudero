import React, {useEffect, useState } from 'react';
import '../../Styles/ItemListContainer.css';
import firebase from 'firebase';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';
import {getFirestore} from '../../firebase';
import { useAuth } from '../../Contexts/AuthContext';

const ItemListContainer = ({custom}) => {
    const {catId} = useParams();
    const [loading, setLoading]=useState(true);
    const[products, setProducts]=useState(null);
    const auth = useAuth();
    const user = firebase.auth().currentUser;
        useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((item)=>{
            if(catId){
                const filtered = itemsCollection.where("category", "==", catId)
                filtered.get().then((res)=>{
                const array = res.docs.map(doc=>({id:doc.id, ...doc.data()}))
                setProducts(array)}).catch((err)=>{console.log(err)})
            }else if(custom===false){
                itemsCollection.where('custom',"==",custom).get().then((res)=>{
                    const customItems = res.docs.map(doc=>({id:doc.id, ...doc.data()}));
                    setProducts(customItems)
                })
            }else if(custom ===true){
                    itemsCollection.where('custom',"==",custom).where('buyer.email', '==', user.email).get().then((res)=>{
                        const standardItems = res.docs.map(doc=>({id:doc.id, ...doc.data()}));
                        setProducts(standardItems)
                    })
            }
        }).catch((err)=>console.log(err)
        ).finally(()=>{
            setLoading(false);
        })
    },[custom || catId]);

    return (
        <div className="itemListDiv">
            <h1 className="greetings"> {catId ? ` 🔍 ${catId}` : auth.currentUser!== null ? `WELCOME TO DECO.ETC ${auth.currentUser.displayName == null? "!"  : auth.currentUser.displayName}!` : "WELCOME TO DECO.ETC E-COMMERCE!"   }</h1>
            {loading ?<Loading></Loading> : <ItemList products={products} custom={custom}/>}
        </div>
    );
};

export default ItemListContainer;