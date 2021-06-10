import {useState, createContext, useContext} from 'react';

export const CartContext = createContext();
export const useCart =()=> useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [shopCart, setShopCart]=useState({items:[],
                                            itemAmmount:null,
                                            totalPrice:null
    })
    //Cart functions:
    const addItem = ()=>{

    }

    const removeItem = ()=>{

    };

    const clearCart = ()=>{
        setShopCart({items:[],
            itemAmmount:null,
            totalPrice:null})
    };
    const isInCart=()=>{

    };
    return <CartContext.Provider value={shopCart}>{children}</CartContext.Provider>
}