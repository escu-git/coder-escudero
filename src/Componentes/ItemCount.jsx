import {React, useState} from 'react'
import '../Styles/ItemCount.css';
import Button from '@material-ui/core/Button';
import buttonStyle from '../Componentes/material-ui/Buttons'

let stock = 5;
const ChangeStock = ()=>{
    const [amount, setAmount] = useState(stock);
    const [counter, setCounter] =useState(0)
    // const [shoppingCart, setShoppingCart] = useState(0); //? State for cart

    const itemAdd = (x)=>{
        if(counter === stock) return console.log('You cannot add more items')
        setAmount(amount-1);
        setCounter(counter+x);
    };


    const itemDecrease = (stock)=>{
        if(counter === 0 || amount === stock) return console.log('You cannot return more items')
        setAmount(amount+1)
        setCounter(counter-1)
    }

    // const cart = ()=>{ //? State for cart
    //     if(counter ===0) return console.log('You have none items in your cart');

    //     setShoppingCart(counter);
    //     console.log(shoppingCart)
    //     setCounter(0)

    // }
    return {amount, itemAdd, itemDecrease, counter, /**cart*/}
}
    
const ItemCount = () => {
    const {amount, itemAdd, itemDecrease, counter} = ChangeStock();
        const classes = buttonStyle();
    return (
        <div className="itemCount">
            <div className = "buttons">
            <div className={classes.root}>
                <Button variant="outlined" color="primary" onClick={()=>itemDecrease(-1)}>DECREASE</Button>
            </div>
            <span className="counter">{counter}</span>
            <div className={classes.root}>
                <Button variant="outlined" color="secondary" onClick={()=>itemAdd(+1)}>INCREASE</Button>
            </div>
            </div>
            <span className="stock">Available stock: {amount}</span>
        </div>
    )
}

export default ItemCount;
