import React from 'react';
import Item from './Item';
import styled from 'styled-components';


const ItemList = ({products}) => {
    return (
        <ProductContainer>
            {products?.map((product)=>{
                return(<Item key={product.id} pictureUrl={product.pictureUrl} alt={product.alt} title={product.title} price={product.price}></Item>)
            })}
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
export default ItemList


