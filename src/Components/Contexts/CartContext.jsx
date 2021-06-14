import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[], totalPrice: 0};


const totalSum = (cart, item) =>{
    return cart.addedItems.reduce(function (a,b){
        console.log('ingresó totalSum')
        console.log(`Esto es a:${a} y esto es b: ${b.price} y ${b.quantity}`)
        return a + (b.price * b.quantity)},0) + item.price * item.quantity;   
}


export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState(INITIAL_STATE)

    //Cart functions:   

    const addItem = (item)=>{
        const itemInCart = cart.addedItems.find((cartProduct)=> cartProduct.id === item.id);
        const sum = totalSum(cart, item)
        if(itemInCart){
            itemInCart.quantity += item.quantity
            setCart({...cart, totalPrice:sum})
        }else{
            setCart({...cart, addedItems:[...cart.addedItems, item], totalPrice:sum})
        }
    }

    const removeItem = (detail)=>{
        console.log(detail)
        const sum = totalSum(cart, detail)
        const idToRemove = cart.addedItems.find((cartProduct)=> cartProduct.id === detail.id);
        console.log(idToRemove)
        const itemIndex = cart.addedItems.indexOf(idToRemove)
        const newCart = cart.addedItems.splice(itemIndex);
        console.log(newCart)
        setCart({...cart, addedItems:[...cart.addedItems, newCart], totalPrice:sum})
    };

    const clearCart = ()=>{
        setCart(INITIAL_STATE)
        console.log('clearCart clicked')
    };

    const isInCart=(item)=>{
    const itemInCart = cart.find((cartProduct)=> cartProduct.id === item.id);
    if(itemInCart){}
    itemInCart ? console.log('This item is already in your cart') : console.log('')
    console.log('isInCart clicked')
    };

    console.log(cart)
    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, totalSum}}>{children}</CartContext.Provider> 
}