import React from 'react'
import styled from 'styled-components';
import Login from '../../Authentication/Login';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import '../../../Styles/styles.css'

const CustomizedItem = (product) => {
    const preview='https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/designPreview.jpg?alt=media&token=bbe80d41-85c7-4ca3-a086-f9e1ac11ebb1';
    const auth = useAuth();
    console.log(product)
    return (
       
        <CustomizedContainer className='customizedContainer'>
            <div className='previewContainer'>
                <img className='preview' src={preview} alt='Preview'/>
                <img src={product.item.image} alt={product.item.alt} className='isDesign'/>
            </div>
            <span className="title">{(product.item.title).toUpperCase()}</span>
            <span className="price">{product.item.price}</span>
            <NavLink to={`/item/${product.item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Button variant="outlined">Details</Button>
            </NavLink> 
        </CustomizedContainer>
    )
}

const CustomizedContainer = styled.div`


`

export default CustomizedItem
