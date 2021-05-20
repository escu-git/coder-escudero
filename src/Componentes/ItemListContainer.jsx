import React, { useEffect } from 'react';
import '../Styles/ItemListContainer.css'
import {itemsArray} from './fakeFetch';
import item from './item';


const ItemListContainer = (props) => {
    const [item, setItem] = useState([]);
    useEffect(async()=>{

    })
    return(
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
        </div>
    );
};

export default ItemListContainer;
