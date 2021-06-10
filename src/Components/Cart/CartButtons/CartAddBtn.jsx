import React from 'react';
import Button from '@material-ui/core/Button';


const CartAddBtn = ({fn, itemData, quantity}) => {
    return (
        <div>
            <Button variant="outlined" color="default" onClick={()=>fn(itemData, quantity)}>ADD TO CART</Button>
        </div>
    )
}

export default CartAddBtn
