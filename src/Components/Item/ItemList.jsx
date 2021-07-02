import React from 'react';
import Item from './Item';
import styled from 'styled-components';
import Custom  from './CustomItem/Custom';
import CustomizedItem from './CustomItem/CustomizedItem';
import { useAuth } from '../../Contexts/AuthContext';
import Login from '../Authentication/Login';
const ItemList = ({products, custom}) => {
    const auth = useAuth();
    return (
        <ProductContainer>
            {custom?
                <>
                    {auth.currentUser ?<>
                    {products?.map((product)=>{
                        return(<CustomizedItem key={product.id} item={product}/>)
                    })}
                    {products && <Custom/>}
                </>:
                    <Login/>}
                </>
                :
                <>
                    {products?.map((product)=>{
                        return(<Item key={product.id} item={product}></Item>)
                    })}
                    {products && <Custom/>}
                </>}
            
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