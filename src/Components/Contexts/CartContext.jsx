import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[{item:'Cuadrito', price:150, quantity:0}],
        totalPrice:0
}

const newAddedItems = () =>{

}

export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState(INITIAL_STATE)

    //Cart functions:   

    const addItem = (item)=>{
        console.log(item)
        setCart({...cart, addedItems:item})
        console.log(cart)
    return 
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