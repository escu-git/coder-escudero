import React, {useEffect, useState } from 'react';
import '../../Styles/ItemListContainer.css';
import ItemsArray from '../ItemsArray';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import Loading from '../Loading/Loading'

const ItemListContainer = (props) => {
    const {catId} = useParams();
    const[products, setProducts]=useState(null);
    const [loading, setLoading]=useState(false)
    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemsArray)
            },2000);
        })
        catId ? promise.then(res => setProducts(res.filter(i => i.category=== catId))) : promise.then(res => setProducts(res)).then(()=> setLoading((loading)=>!loading));
    },[catId]);

    return (
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
            {loading ?<Loading></Loading> : <ItemList products={products}/>}
        </div>
    );
};

export default ItemListContainer;  