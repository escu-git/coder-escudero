import React, {useEffect, useState } from 'react';
import '../../Styles/ItemListContainer.css';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading';
import {getFirestore} from '../../firebase';

const ItemListContainer = (props) => {
    const {catId} = useParams();
    const [loading, setLoading]=useState(true);
    const[products, setProducts]=useState(null);
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((item)=>{
            setProducts(item.docs.map(doc=>({id:doc.id, ...doc.data()})));
            console.log(products);
        }).finally(()=>{
            setLoading(false);
        })
    },[catId]);

    return (
        <div className="itemListDiv">
            <h1 className="greetings"> {catId ? ` 🔍 ${catId}` : "WELCOME TO DECO.ETC E-COMMERCE!"} </h1>
            {loading ?<Loading></Loading> : <ItemList products={products}/>}
        </div>
    );
};

export default ItemListContainer;