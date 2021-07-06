import React from 'react';
import Button from '@material-ui/core/Button';
import '../../../Styles/styles.css'


const CartAddBtn = ({fn, itemData, amount, fill}) => {

    return (
        <div>
            {amount > 0 ? <Button  variant="outlined" color="primary" onClick={()=>fn(itemData, amount)}>{fill}</Button> : <Button  variant="outlined" color="default" onClick={()=>alert('Select quantity before adding to cart')}>{fill}</Button>}
        </div>
    )
}

export default CartAddBtn
 