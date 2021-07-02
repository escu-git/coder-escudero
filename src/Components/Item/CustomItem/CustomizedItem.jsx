import React from 'react'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const CustomizedItem = (product) => {
    const preview='https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/designPreview.jpg?alt=media&token=bbe80d41-85c7-4ca3-a086-f9e1ac11ebb1';
    console.log(product)
    return (
        <CustomizedContainer>
        <span>{product.title}</span>
        <div className='previewContainer'>
            <img className='preview' src={preview} alt='Preview picture'/>
            <img src={product.item.image} alt={product.item.alt} className='isDesign'/>
        </div>
        <NavLink to={`/item/${product.item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Button variant="outlined">Details</Button>
            </NavLink> 
        </CustomizedContainer>
    )
}

const CustomizedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
span{
    display:block;
    text-align:center;
    font-size:30px;
    font-weight:bold;
    margin:10px;
}

.previewContainer{
    position:relative;
    width:400px;
    height:500px;
    border:2px solid black;
    border-radius:10px;
    margin:20px;
    z-index:0;
}

.preview{
    width:100%;
    height:100%;
    border-radius:8px;
}

.isDesign{
    position:absolute;
    width:55%;
    height:59%;
    left:50%;
    top:50%;
    margin-left:-110px;
    margin-top:-145px;
    z-index:2;
}

.buyBtn{
    margin:30px;
    color:green;
    border:1px solid green;
}
`

export default CustomizedItem
