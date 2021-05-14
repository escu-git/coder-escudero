import {React,Component, useState} from 'react'
import '../Styles/ItemCount.css'
const ItemCount = () => {
    const [amount, setAmount] = useState(stock);
    let stock = 10
    const itemCount = (stock, initial, )=>{
        console.log(stock)
    }
    return (
        <div className="itemCount">
            <button onCliclk={()=> itemCount()-1}>
                Add
            </button>
            <button>
                Decrease
            </button>
            <span>{amount}</span>
        </div>
    )
}

export default ItemCount
