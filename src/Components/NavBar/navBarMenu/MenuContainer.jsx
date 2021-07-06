import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Categories from './Categories';
import {getFirestore} from '../../../firebase';
import Loading from '../../Loading/Loading';
import '../../../Styles/styles.css'

const MenuContainer = ({classNamed}) => {
    const [categories, setCategories]=useState("")
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        const db = getFirestore();
        const categoriesCollection = db.collection('categories');
        categoriesCollection.get().then(res=>{
            const array = res.docs.map(x=> ({id:x.id,...x.data()}))
            setCategories(array.map(x=>x))})
            setLoading(false)
        },[])
        
    return (
        <Container className={classNamed}>
            {loading ? <Loading/> : <Categories key={categories.id} data={categories}></Categories>}
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