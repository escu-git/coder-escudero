import React from 'react'
import styled from 'styled-components'

const ItemDetail = ({urlPicture, alt, title, description, linea, price}) => {
    return (
        <Details>
            <img src={urlPicture} alt={alt}/>
            <span>{title}</span>
            <span>{description}</span>
            <span>{linea}</span>
            <span>{price}</span>
        </Details>
    )
}

const Details = styled.div`
    width:200px;
`

export default ItemDetail
