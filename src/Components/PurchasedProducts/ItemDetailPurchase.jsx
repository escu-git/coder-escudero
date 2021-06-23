import React from 'react'
import styled from 'styled-components';

const ItemDetailPurchase = ({image, title, alt, price, quantity}) => {
    return (
        <ProductContainer>
            <div>
            <img src={image} alt={alt}/>
            <h2>{title}</h2>
            <span>${price}.-</span>
            <span>Quantity:{quantity}</span>
            </div>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
display:flex;
flex-direction:row;
wrap:wrap;
margin:15px;
border:1px solid black;
border-radius:10px;

div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
}
img{
    width:200px;
    height:200px;
    border-radius:10px 10px 0 0;
}
span{
    font-size:16px;
    font-weight:bold;
}
`

export default ItemDetailPurchase
