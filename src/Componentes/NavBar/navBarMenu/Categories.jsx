import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Categories = ({category}) => {
    console.log(category)
    return (
        <>
         <NavLink to={`/categories/${category}`}>
         <Cat>{category}</Cat>
         </NavLink>
        </>
    )
}

const Cat = styled.div`
font-family:arial;
font-size:15px;

`
export default Categories
