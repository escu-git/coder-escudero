import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components';

const CustomItem = () => {
    const preview = 'https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/designPreview.jpg?alt=media&token=bbe80d41-85c7-4ca3-a086-f9e1ac11ebb1';
    const[design, setDesign]=useState(null)
    const[title, setTitle]=useState('Set your artwork name!')
    return (
        <FormContainer>
            <span>{title}</span>
        <div className='previewContainer'>
            <img className='preview' src={preview} alt='Preview picture'/>
            <img src={design? design : null} alt={design? 'Your custom design': null} className={design? 'isDesign' : 'notDesign'}/>
        </div>

        <form type='submit'>
            <input type='text' placeholder='Artwork name'
                onChange={(e)=>{setTitle(e.target.value)}}
            />
        </form>
        </FormContainer>
    )
}


const FormContainer = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
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
}

.preview{
    width:100%;
    height:100%;
}

.isDesign{
    position:absolute;
    width:55%;
    height:59%;
    left:50%;
    top:50%;
    margin-left:-110px;
    margin-top:-145px;
}

.notDesign{
    display:none;
}

`
export default CustomItem
