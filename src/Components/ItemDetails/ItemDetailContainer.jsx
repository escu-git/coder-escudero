import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import Loading from '../Loading/Loading'
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const[details, setDetails]=useState([]);
    const[loading, setLoading]=useState(true);
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection('items')
        itemsCollection.get().then(res=>{
            const array = res.docs.map(x=>x.data())
            setDetails(array.filter(i => i.id === Number(id)))}
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