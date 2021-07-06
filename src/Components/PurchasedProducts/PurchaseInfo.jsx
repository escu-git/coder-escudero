import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../Styles/styles.css'

const PurchaseInfo = ({name, email, phone, price, cart}) => {

    return (
        <Info className='infoContainer'>
            <h2>BUYER INFO</h2>
            <AccountCircleIcon id='userIcon'/>
            <div className="userInfo">
                <span>Name</span>
                <span>{name}</span>
                <span>Email</span>
                <span>{email}</span>
            <div className="productInfo">
                <span>Total Price: ${price}.-</span>
            </div>
            </div>
        </Info>
    )
}

const Info = styled.div`

`

export default PurchaseInfo
