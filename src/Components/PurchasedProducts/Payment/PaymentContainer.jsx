import React from 'react'
import {NavLink} from 'react-router-dom'
const PaymentContainer = () => {
    return (
        <div>
            THIS IS THE PAYMENT SECTION
            <NavLink to='/purchase'><div>CONFIRM PURCHASE</div></NavLink>
        </div>
    )
}

export default PaymentContainer
