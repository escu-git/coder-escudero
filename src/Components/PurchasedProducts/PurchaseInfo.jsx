import React from 'react'
import styled from 'styled-components';
const PurchaseInfo = ({name, email, phone, price, cart}) => {

    return (
        <Info>
             <h2>Your purchase info:</h2>
             <div className="userInfo">
                <span>Name: {name}</span>
                <span>Phone: {phone}</span>
             <span>Email: {email}</span>
             </div>
             <div className="productInfo">
            <span>{cart}</span>
             <span>Price: ${price}.-</span>
             </div>
        </Info>
    )
}

const Info = styled.div`
width:60%;
height:700px;
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:100px;
h2{
    font-size:30px;
}
.userInfo{
    display:flex;
    flex-direction:column;
    font-size:20px;
}
.productInfo{
    display:flex;
}
span{
    font-size:20px;
    font-weight:bold;
}
`

export default PurchaseInfo
