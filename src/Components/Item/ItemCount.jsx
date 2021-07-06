import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import buttonStyle from '../material-ui/Buttons'
import CartAddBtn from '../Cart/CartButtons/CartAddBtn';
import '../../Styles/styles.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ChangeStock = (itemData)=>{
    const [amount, setAmount] = useState(itemData.stock);
    const [counter, setCounter] =useState(0);

    const itemAdd = (x)=>{
        if(counter === itemData.stock) return console.log('You cannot add more items')
        setAmount(amount-1);
        setCounter(counter+x);
    };


    const itemDecrease = (stock)=>{
        if(counter === 0 || amount === itemData.stock) return console.log('You cannot return more items')
        setAmount(amount+1)
        setCounter(counter-1)
    }

    return {amount, itemAdd, itemDecrease, counter}
}

const ItemCount = ({fn, itemData}) => {
    const {amount, itemAdd, itemDecrease, counter} = ChangeStock(itemData);
    const classes = buttonStyle();

return (
    <div className="itemCount">
        <div className = "buttons">
            <div className={classes.root}>
                <Button variant="outlined" color="primary" onClick={()=>itemDecrease(-1)}>-</Button>
            </div>
            <span className="counter">{counter}</span>
            <div className={classes.root}>
                <Button variant="outlined" color="secondary" onClick={()=>itemAdd(+1)}>+</Button>
            </div>
            <div className='stock'>
                <span>Available stock: {amount}</span>
                <CartAddBtn  className='toCart' fn={fn} itemData={itemData} amount={counter} fill={<AddShoppingCartIcon/>}/>
            </div>
        </div>
    </div>
)};

export default ItemCount;