import React from 'react'
import styled from 'styled-components';
const PurchaseInfo = ({name, surname, email, phone, price}) => {

    return (
        <Info>
             <h2>Your purchase info:</h2>
             <span>Name: {name}</span>
             <span>Surname: {surname}</span>
             <span>Email: {email}</span>
             <span>Phone: {phone}</span>
             <span>Price: {price}</span>
        </Info>
    )
}

const Info = styled.div`
display:flex;
`

export default PurchaseInfo
