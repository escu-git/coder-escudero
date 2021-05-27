import React from 'react'
import styled from 'styled-components'

const ItemDetail = ({detail}) => {

    return (
        <Details>
        <div className={detail!==0 ? "detailDiv" : null}>
            <img src={detail.pictureUrl} alt={detail.alt}/>
            <span className="detailTitle">{detail.title}</span>
            <span className="detailDescription">{detail.description}</span>
            <span className="detailLinea">{detail.linea}</span>
            <span className="detailPrice">{detail.price}</span>
            </div>
        </Details>
    )
}

const Details = styled.div`
    .detailDiv{
    border:2px solid black;
    width:60%;
    heigth:400px;
    margin:0 auto;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-template-rows:repeat(4, 1fr);
    grid-template-areas:
    "picture picture title title"
    "picture picture description description"
    "picture picture description description"
    "picture picture linea price";
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