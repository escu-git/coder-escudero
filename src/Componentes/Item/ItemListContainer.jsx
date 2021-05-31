import React, {useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import '../../Styles/ItemListContainer.css';
import ItemsArray from '../ItemsArray';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getProducts } from '../../functions';
import Loading from '../Loading/Loading'

const ItemListContainer = (props) => {
    const {catId} = useParams();
    const[products, setProducts]=useState(null);
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemsArray)
            },3500);
        })
        catId ? promise.then(res => setProducts(res.filter(i => i.catId === catId))) : promise.then(res => setProducts(res)).then(()=> setLoading((loading)=>!loading));
    },[catId]);

    return (
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
            {loading ?<Loading></Loading> : <ItemList products={products}/>}
        </div>
    );
};

export default ItemListContainer;  