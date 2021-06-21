import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Categories from './Categories';
import {getFirestore} from '../../../firebase';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink} from 'react-router-dom';

const MenuContainer = () => {
    const [categories, setCategories]=useState("")

    useEffect(()=>{
        const db = getFirestore();
        const categoriesCollection = db.collection('categories');
        categoriesCollection.get().then(res=>{
            const array = res.docs.map(x=> x.data())
            console.log(array.map(x=>x.name))
            setCategories(array.map(x=>x.name))})
    },[])
    
    return (
        <Container>
            <Categories data={categories}></Categories>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    div{
    display:flex;
    flex-direction:column;
    }
`
export default MenuContainer