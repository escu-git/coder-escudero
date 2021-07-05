import React,{useState} from 'react';
import styled from 'styled-components';
import ItemCount from '../Item/ItemCount';
import PurchaseBtn from '../Cart/CartButtons/PurchaseBtn';
import {Link} from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';
import '../../Styles/styles.css'
const ItemDetail = ({detail}) => {
const[isPurchase, setIsPurchase] = useState(false);
const cart = useCart()

const addNewProduct=(itemData, amount)=>{
    setIsPurchase(true)
    const details = {...itemData, quantity:amount}
    cart.addItem(details)
}

    return (
        <Details className='detailsDiv'>
            <div className={detail!==0 ? "detailDiv" : null}>
                <img src={detail.image} alt={detail.alt}/>
                <span className="detailTitle">{(detail.title.toUpperCase())}</span>
                <span className="detailDescription">{(detail.description).toUpperCase()}</span>
                <span className="detailLinea">{detail.category}</span>
                <span className="detailPrice">${detail.price}.-</span>

                        {isPurchase || <ItemCount className='itemCount' fn={addNewProduct} itemData={detail}/>}
                        {isPurchase ? 
                        <div className='purchaseBtnContainer'>
                            <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
                                <PurchaseBtn text={"GET MORE PRODUCTS!"}/>
                            </Link>
                            <Link to='/cart' style={{textDecoration:'none', color:'inherit'}}>
                                <PurchaseBtn className='purchaseBtn' text={"PURCHASE CART"}/>
                            </Link> 
                        </div>: 
                        null}
            </div>
        </Details>
    )
}

const Details = styled.div`

`

export default ItemDetail;