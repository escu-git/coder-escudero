import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

const INITIAL_STATE={addedItems:[], totalPrice: 0};


const totalSum = (cart, item) =>{
    return cart.addedItems.reduce(function (a,b){
        return a + (b.price * b.quantity)},0) + item.price * item.quantity;   
}

const substractTotalSum = (cart, item) =>{
    return cart.addedItems.reduce(function (a,b){
        return a + (b.price * b.quantity)},0) - item.price * item.quantity;   
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
        const idToRemove = cart.addedItems.find((cartProduct)=> cartProduct.id === detail.id);
        if(idToRemove){
            const newCart = cart.addedItems.filter(function(x){return x.id !==idToRemove.id});
            const sum = substractTotalSum(cart, idToRemove)
            setCart({...cart, addedItems:newCart, totalPrice:sum})
        }else{
            alert(`Item ${detail.title} is not in your cart`)
        }
    };

    const clearCart = ()=>{
        setCart(INITIAL_STATE)
        console.log('Cart correctly cleared!')
    };


    console.log(cart)
    return <CartContext.Provider value={{cart, addItem, removeItem, clearCart,totalSum}}>{children}</CartContext.Provider> 
}