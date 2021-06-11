import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[{itemName:'Cuadrito', price:150, quantity:0}], totalPrice:0, totalItems:0}

export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState(INITIAL_STATE)

    //Cart functions:   

    const addItem = (item)=>{
        const totalSum = (array, x) =>{
            const value = x===1?array.reduce(function (acc, obj){return acc + obj.price;},0):array.reduce(function (acc, obj){return acc + obj.quantity;},0)
            console.log(array)
            return value
        }
        setCart({...cart, addedItems:[...cart.addedItems, item], totalPrice: totalSum(cart.addedItems, 1), totalItems:totalSum(cart.addedItems, 2)})
        console.log(cart)
    }

    const removeItem = ()=>{
        console.log('removeItem clicked')
    };

    const clearCart = ()=>{
        setCart(INITIAL_STATE)
        console.log('clearCart clicked')
        console.log(cart)
    };

    const isInCart=()=>{
    console.log('isInCart clicked')
    };

    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>{children}</CartContext.Provider> 
}