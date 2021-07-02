import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import Custom  from './CustomItem/Custom';
import CustomizedItem from './CustomItem/CustomizedItem';

const ItemList = ({products, custom}) => {
    const customized = custom;

    return (
        <ProductContainer>
            {products?.map((product)=>{
                return(custom?
                <CustomizedItem key={product.id} item={product}/> :
                <Item key={product.id} item={product}></Item>)
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