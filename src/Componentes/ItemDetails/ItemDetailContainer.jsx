import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import itemsArray from '../ItemsArray';
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {
    
    const[details, setDetails]=useState({});
    const[loading, setLoading]=useState(true);
    useEffect(()=>{
            new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(itemsArray)
                },4000);
            }).then(res=>{   
                setDetails(res[2]) //idk how to choose between the "[0]" or "res" param.
                setLoading(false)
            }).catch(err=>{
                console.log(err)
            });
    },[])

    return (
        <DetailsContainer className="detailsContainer">
        {loading ? <Loading/> : <ItemDetail detail={details}></ItemDetail>}    
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
width:100%;
height:500px;
`
export default ItemDetailContainer;