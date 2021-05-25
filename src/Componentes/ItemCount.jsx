import {React, useState} from 'react'
import '../Styles/ItemCount.css';

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
    return (
        <div className="itemCount">
            <div className = "buttons">
                <button onClick={()=>itemDecrease(-1)}>
                    DECREASE|
                </button>
                <span>{counter}</span>
                <button onClick={()=> itemAdd(1) }>
                    INCREASE
                </button>
            </div>
            <span className="stock">Available stock: {amount}</span>
        </div>
    )
}

export default ItemCount;
