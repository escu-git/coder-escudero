import React,{useState} from 'react';
import styled from 'styled-components';
import ItemCount from '../Item/ItemCount';
import PurchaseBtn from '../Cart/CartButtons/PurchaseBtn';
import {Link} from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';

const ItemDetail = ({detail}) => {
const[isPurchase, setIsPurchase] = useState(false);
const cart = useCart()

const addNewProduct=(itemData, amount)=>{
    setIsPurchase(true)
    const details = {...itemData, quantity:amount}
    cart.addItem(details)
}

const handlePurchase=()=>{
    console.log('Handling purchase')    
}

    return (
        <Details>
        <div className={detail!==0 ? "detailDiv" : null}>
            <img src={detail.image} alt={detail.alt}/>
            <span className="detailTitle">{detail.title}</span>
            <span className="detailDescription">{detail.description}</span>
            <span className="detailLinea">{detail.category}</span>
            <span className="detailPrice">{detail.price}</span>
            {isPurchase ? <Link to='/cart' style={{textDecoration:'none', color:'inherit'}}><PurchaseBtn fn={handlePurchase}/></Link> : <ItemCount className='itemCount' fn={addNewProduct} itemData={detail}/>}
            </div>
        </Details>
    )
}

const Details = styled.div`
    .detailDiv{
    border:2px solid black;
    width:60%;
    heigth:400px;
    margin:2% auto;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-template-rows:repeat(5, 1fr);
    grid-template-areas:
    "picture picture title title"
    "picture picture description description"
    "picture picture linea price"
    "picture picture stock stock"
    "picture picture cart cart";
    text-align:center;
    }

    img{
    width:100%;
    height:100%;
      grid-area:picture;
    }
   .detailTitle{
       grid-area: title;
       font-size:5em;
    }
    .detailDescription{
        grid-area: description;
        font-size:2em;
    }
    .detailLinea{
        grid-area:linea;
        font-size:3em;
    }
    .detailPrice{
        grid-area:price;
        font-size:3em;
    }
`

export default ItemDetail;