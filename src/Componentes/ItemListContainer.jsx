import { React, useEffect, useState } from 'react';
import '../Styles/ItemListContainer.css';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
    return (
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
            <ItemList/>
        </div>
    );
};

export default ItemListContainer;