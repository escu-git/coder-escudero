import {React, useState, useEffect} from 'react'
import '../../Styles/ItemCount.css';
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import PurchaseBtn from '../Cart/CartButtons/PurchaseBtn';
import CartAddBtn from '../Cart/CartButtons/CartAddBtn';

let stock = 5;
const ChangeStock = ()=>{
    const [amount, setAmount] = useState(stock);
    const [counter, setCounter] =useState(0);

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

    return {amount, itemAdd, itemDecrease, counter}
}

    
const ItemCount = () => {
    const {amount, itemAdd, itemDecrease, counter} = ChangeStock();
    const[isPurchase, setIsPurchase] = useState(false);

    const handleClick=()=>{
        console.log('Handling cart Btn')
        setIsPurchase(true)
    }
    const handlePurchase=()=>{
        console.log('Handling purchase')

    }
    const classes = buttonStyle();

    const elements=[];
    elements.push(<div className = "buttons">

    <div className={classes.root}>
        <Button variant="outlined" color="primary" onClick={()=>itemDecrease(-1)}>-</Button>
    </div>
    <span className="counter">{counter}</span>
    <div className={classes.root}>
     <Button variant="outlined" color="secondary" onClick={()=>itemAdd(+1)}>+</Button>
     {/* <span className="stock">Available stock: {amount}</span> */}
  </div>
</div>)
    return (
        <div className="itemCount">
            {isPurchase ? <></> : elements}
            {isPurchase ? <PurchaseBtn fn={handlePurchase}/> : <CartAddBtn fn={handleClick}/>}

        </div>
    )
}

export default ItemCount;