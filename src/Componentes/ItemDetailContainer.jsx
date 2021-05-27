import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import itemsArray from './ItemsArray'


const ItemDetailContainer = () => {
    
    const[details, setDetails]=useState({})
    
    useEffect(()=>{
        const getItem= (object)=>{
            const detailsDelay = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(itemsArray)
                },4000)
            }).then((res)=>{console.log(`Resuelto!${res[0]}`)
            setDetails(res[0])
            }).catch((err)=>{
                console.log(err)
            });
        }
    })

    return (
        <DetailsContainer>
            {details?.map((detail)=>{return<ItemDetail detail={detail}/>})}
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
width:100%;
`

export default ItemDetailContainer;