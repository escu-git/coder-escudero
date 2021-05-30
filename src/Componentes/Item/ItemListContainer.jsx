import React, {useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import '../../Styles/ItemListContainer.css';
import ItemsArray from '../ItemsArray';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import { getProducts } from '../../functions';

const ItemListContainer = (props) => {
    const {catId} = useParams();
    const [loading, setLoading]=useState(true)
    const[products, setProducts]=useState(null);
    useEffect(()=>{

        getProducts(ItemsArray,setProducts, 2000, catId, products)
    },[catId])

    return (
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;  