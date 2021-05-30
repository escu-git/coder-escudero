import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { getItems } from '../../functions';
import ItemDetail from './ItemDetail';
import itemsArray from '../ItemsArray';


const ItemDetailContainer = () => {
    
    const[details, setDetails]=useState({})
    
    useEffect(()=>{
        getItems(itemsArray, setDetails, details, 4000)
    },[])


    return (
        <DetailsContainer className="detailsContainer">
            <ItemDetail detail={details}></ItemDetail>
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
width:100%;
height:500px;
`
export default ItemDetailContainer;