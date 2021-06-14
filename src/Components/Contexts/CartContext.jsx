import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[], totalPrice: 0};

const totalSum = (cart, item) =>{
    const value = cart += (item.price * item.quantity);
    return value
}



export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState(INITIAL_STATE)

    //Cart functions:   

    const addItem = (item)=>{
        const itemInCart = cart.addedItems.find((cartProduct)=> cartProduct.id === item.id);

        if(itemInCart){
            itemInCart.quantity += item.quantity
            setCart({...cart})
        }else{
            setCart({...cart, addedItems:[...cart.addedItems, item], totalPrice: totalSum(cart.totalPrice, item)})
        }
    }

    const removeItem = (item)=>{
        console.log('removeItem clicked')
        const itemInCart = cart.addedItems.find((cartProduct)=> cartProduct.id === item.id);
        if(itemInCart){
        const itemToDelete= cart.addedItems.findIndex(itemInCart);
        cart.addedItems.splice(itemToDelete)
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
    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>{children}</CartContext.Provider> 
}