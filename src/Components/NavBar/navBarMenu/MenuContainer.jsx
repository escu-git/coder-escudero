import React, {useState} from 'react'
import styled from 'styled-components'
import Categories from './Categories';
const MenuContainer = () => {
    const [categories]=useState(["RETRO", "REBEL-CAT", "FEM", "BAR", "NEW-CONCEPT"])

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