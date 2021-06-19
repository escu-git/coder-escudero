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
            const array = res.docs.map(doc=>({id:doc.id, ...doc.data()}))
            console.log(`Este es el array ${array[0].id}, y este el params: ${id}`)
            setDetails(array.filter(doc => doc.id === id))
        console.log(details[0])}
        ).then(()=>setLoading((loading)=>!loading))
    },[id]);

    return (
        <DetailsContainer className="detailsContainer">
        {loading ? <Loading/> : <ItemDetail detail={details[0]}></ItemDetail>}    
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
width:100%;
height:500px;
`
export default ItemDetailContainer