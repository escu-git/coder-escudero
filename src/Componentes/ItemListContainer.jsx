import { React, useEffect, useState } from 'react';
import '../Styles/ItemListContainer.css';
import ItemsArray from './ItemsArray';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
    const[products, setProducts]=useState(null);
    useEffect(()=>{
        const arrayDelay = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemsArray)
            },2000)
        }).then((res)=>{console.log(`Resolved array: ${res}`)
        setProducts(res); 
    }).catch((err)=>{console.log(err)});
    })

    return (
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
            <ItemList products={products}>

            </ItemList>
        </div>
    );
};

export default ItemListContainer;