import React from 'react'
import styled from 'styled-components';
import Login from '../../Authentication/Login';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';

const CustomizedItem = (product) => {
    const preview='https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/designPreview.jpg?alt=media&token=bbe80d41-85c7-4ca3-a086-f9e1ac11ebb1';
    const auth = useAuth();
    console.log(product)
    return (
       
        <CustomizedContainer>
            <div className='previewContainer'>
                <img className='preview' src={preview} alt='Preview picture'/>
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
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin:20px;
  border:3px solid black;
  border-radius:10px ;

span{
    font-size:1.5em;
}

.previewContainer{
    position:relative;
    width:300px;
    height:50%;
    border:2px solid black;
    border-radius:10px;
    margin:20px;
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
    margin-left:-81.5px;
    margin-top:-119px;
}

`

export default CustomizedItem
