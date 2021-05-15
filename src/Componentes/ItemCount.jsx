import {React, useState} from 'react'
import '../Styles/ItemCount.css';

let stock = 5;
const ChangeStock = ()=>{
    const [amount, setAmount] = useState(stock);
    const [counter, setCounter] =useState(0)

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
    return (
        <div className="itemCount">
            <div className = "buttons">
                <button onClick={()=> itemAdd(1) }>
                    ADD
                </button>
                <span>{counter}</span>
                <button onClick={()=>itemDecrease(-1)}>
                    DECREASE
                </button>
            </div>
            <span className="stock">Available stock: {amount}</span>
        </div>
    )
}

export default ItemCount;
