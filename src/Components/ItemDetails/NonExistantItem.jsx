import React from 'react';
import styled from 'styled-components';
const NonExistentItem = () => {
    return (
        <Container>
            <img src="https://firebasestorage.googleapis.com/v0/b/deco-etcetera.appspot.com/o/error404.jpg?alt=media&token=73741e44-a16d-4995-949b-c2dd141fb19a" alt='Not found image'/>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color: rgb(230, 230, 230);

img{
    border:1px solid black;
    border-radius:10px;
}

`

export default NonExistentItem
