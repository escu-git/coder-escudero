import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import itemsArray from './ItemsArray'


const ItemDetailContainer = () => {
    
    const[details, setDetails]=useState({})
    
    useEffect(()=>{
        new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(itemsArray)
            },4000);
        }).then(res=>{
            setDetails(res[0])
            console.log(details)
        }).catch(err=>{
            console.log(err)
        })
    })


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