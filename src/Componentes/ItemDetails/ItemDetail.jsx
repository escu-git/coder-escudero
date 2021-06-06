import React from 'react';
import styled from 'styled-components';
import ItemCount from '../Item/ItemCount';

const ItemDetail = ({detail}) => {

    return (
        <Details>
        <div className={detail!==0 ? "detailDiv" : null}>
            <img src={detail[0].pictureUrl} alt={detail[0].alt}/>
            <span className="detailTitle">{detail[0].title}</span>
            <span className="detailDescription">{detail[0].description}</span>
            <span className="detailLinea">{detail[0].category}</span>
            <span className="detailPrice">{detail[0].price}</span>
            <ItemCount className='itemCount'/>
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