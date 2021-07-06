import React from 'react'
import styled from 'styled-components';
import ItemDetailPurchase from '../ItemDetailPurchase';
import '../../../Styles/styles.css'
const Order = ({data}) => {
    console.log(data)
    return (
        <OrderContainer >
            <span>ORDER N°: {data.id}</span>
            <div className='orderContainer'>
            {data.purchase?.map(x=>{return(
                <ItemDetailPurchase className="itemDetailPurchase" image={x.image} title={x.title} alt={x.alt} price={x.price} quantity={x.quantity} />)}
            )}
            </div>
            <span className='divider'/>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
display:flex;
flex-direction:column;
span{
    font-size:1.5em;
    margin:10px;
}

`


export default Order

