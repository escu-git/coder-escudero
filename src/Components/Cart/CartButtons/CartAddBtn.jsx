import React from 'react';
import Button from '@material-ui/core/Button';


const CartAddBtn = ({fn, itemData, amount}) => {

    return (
        <div>
            {amount > 0 ? <Button variant="outlined" color="default" onClick={()=>fn(itemData, amount)}>ADD TO CART</Button> : <Button variant="outlined" color="default" onClick={()=>alert('Select quantity before adding to cart')}>ADD TO CART</Button>}
        </div>
    )
}

export default CartAddBtn
