import React from 'react'
import styled from 'styled-components';
import ItemDetailPurchase from '../ItemDetailPurchase';

const Order = ({data}) => {
    console.log(data)
    return (
        <OrderContainer>
            <h1>{data.id}</h1>
            {data.purchase?.map(x=>{return(
                <ItemDetailPurchase className="itemDetailPurchase" image={x.image} title={x.title} alt={x.alt} price={x.price} quantity={x.quantity} />)}
                
            )}
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
display:flex;
flex-direction:row
justify-content:center;
align-items:center;

.itemDetailPurchase{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
}

`


export default Order

