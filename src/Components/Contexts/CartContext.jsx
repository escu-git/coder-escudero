import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[], totalPrice: 0};


const totalSum = (cart, item) =>{
    return cart.addedItems.reduce(function (a,b){
        console.log('ingresó totalSum')
        console.log(`Esto es a:${a} y esto es b: ${b.price} y ${b.quantity}`)
        return a + (b.price * b.quantity)},0);   
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

    const removeItem = (item)=>{
        console.log('removeItem clicked')
        const itemInCart = cart.addedItems.find((cartProduct)=> cartProduct.id === item.id);
        if(itemInCart){
        const itemToDelete= cart.addedItems.findIndex(itemInCart);
        const deleted = cart.addedItems.splice(itemToDelete)
        console.log(deleted)
        }
    };

    const clearCart = ()=>{
        setCart(INITIAL_STATE)
        console.log('clearCart clicked')
    };

    const isInCart=(item)=>{
    const itemInCart = cart.addedItems.find((cartProduct)=> cartProduct.id === item.id);
    if(itemInCart){}
    itemInCart ? console.log('This item is already in your cart') : console.log('')
    console.log('isInCart clicked')
    };

    console.log(cart)
    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, totalSum}}>{children}</CartContext.Provider> 
}