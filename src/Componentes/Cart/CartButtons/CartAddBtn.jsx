import React from 'react';
import Button from '@material-ui/core/Button';


const CartAddBtn = ({fn}) => {
    return (
        <div>
            <Button variant="outlined" color="default" onClick={fn}>ADD TO CART</Button>
        </div>
    )
}

export default CartAddBtn
