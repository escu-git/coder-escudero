import React from 'react';
import Button from '@material-ui/core/Button';

const PurchaseBtn = ({fn}) => {
    return (
        <div>
             <Button variant="outlined" color="default" onClick={fn}>PURCHASE CART</Button>
        </div>
    )
}

export default PurchaseBtn
