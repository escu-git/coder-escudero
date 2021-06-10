import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={items:[{name:'Cuadrito', price:150, quantity:0}],
        totalPrice:0
}
export const CartProvider = ({children}) =>{
    const [shopCart, setShopCart]=useState(INITIAL_STATE)
    //Cart functions:

    const addItem = (detail)=>{
           
        setShopCart({...shopCart, items:{name:'cuadro', price:200, quantity:2}} )
    return console.log(shopCart)   
    }

    const removeItem = ()=>{
        console.log('removeItem clicked')
    };

    const clearCart = ()=>{
        setShopCart(INITIAL_STATE)
        console.log('clearCart clicked')
    };

    const isInCart=()=>{
    console.log('isInCart clicked')
    };

    return <CartContext.Provider value={{shopCart, addItem, removeItem, clearCart, isInCart}}>{children}</CartContext.Provider> 
}