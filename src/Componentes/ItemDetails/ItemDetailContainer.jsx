import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import itemsArray from '../ItemsArray';
import Loading from '../Loading/Loading'
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const[details, setDetails]=useState({});
    const[loading, setLoading]=useState(true);
    useEffect(()=>{
        new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(itemsArray)
            },3500);
        }).then(res=> setDetails(res.filter(i => i.id === id))
        ).then(()=>setLoading((loading)=>!loading))

    },[id]);

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
export default ItemDetailContainer