import React from 'react';
import '../Styles/ItemListContainer.css'

const ItemListContainer = (props) => {
    return(
        <div className="itemListDiv">
            <h1 className="greetings">{props.greetings}</h1>
        </div>
    );
};

export default ItemListContainer;
