import React from 'react'
import styled from 'styled-components'

const ItemDetail = ({details}) => {
    return (
        <Details>
            <img src={details.urlPicture} alt={details.alt}/>
            <span>{details.title}</span>
            <span>{details.description}</span>
            <span>{details.linea}</span>
            <span>{details.price}</span>
        </Details>
    )
}

const Details = styled.div`
    width:200px;
`

export default ItemDetail
