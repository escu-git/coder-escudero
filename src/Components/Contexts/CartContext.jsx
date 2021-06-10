import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[{item:'Cuadrito', price:150, quantity:0}],
        totalPrice:0
}
export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState(INITIAL_STATE)

    //Cart functions:   

    const addItem = (detail)=>{
           
        setCart({...cart, addedItems:{item:detail[0].title, price:detail[0].price, quantity:2}} )
    return console.log(cart)   
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