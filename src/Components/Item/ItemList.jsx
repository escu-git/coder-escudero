import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import Custom  from './CustomItem/Custom';

const ItemList = ({products}) => {
    return (
        <ProductContainer>
            {products?.map((product)=>{
                return(<Item key={product.id} item={product}></Item>)
            })}
            {products && <Custom/>}
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
export default ItemList;