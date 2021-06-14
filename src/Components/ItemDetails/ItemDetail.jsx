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
    setIsPurchase(false)
    const details = {...itemData[0], quantity:amount}
    cart.addItem(details)
}

const handlePurchase=()=>{
    console.log('Handling purchase')    
}

    return (
        <Details>
        <div className={detail!==0 ? "detailDiv" : null}>
            <img src={detail[0].pictureUrl} alt={detail[0].alt}/>
            <span className="detailTitle">{detail[0].title}</span>
            <span className="detailDescription">{detail[0].description}</span>
            <span className="detailLinea">{detail[0].category}</span>
            <span className="detailPrice">{detail[0].price}</span>
            {isPurchase ? <Link to='/cart' style={{textDecoration:'none', color:'inherit'}}><PurchaseBtn fn={handlePurchase}/></Link> : <ItemCount className='itemCount' fn={addNewProduct} itemData={detail}/>}
            <button onClick={()=>cart.removeItem(detail[0])}>BORRAR</button>
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