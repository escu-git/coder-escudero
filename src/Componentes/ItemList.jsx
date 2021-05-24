import {useState, useEffect, React} from 'react';
import ItemsArray from './ItemsArray';
import Item from './Item';
import styled from 'styled-components';

const arrayDelay = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(ItemsArray)
    },2000)
}).then((res)=>{
    console.log(`Resolved array: ${res}`
    )}).catch((err)=>{
    console.log(err)
});

const ItemList = () => {
    const[products, setProducts]=useState(null);

    useEffect(async()=>{
        await setProducts(ItemsArray);
        console.log(products)
    })
    return (
        <ProductContainer>
            {products?.map((product)=>{
                <Item key={product.id} pictureUrl={product.pictureUrl} alt={product.alt} title={product.title} price={product.price}></Item>
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


