import React from 'react'
import styled from 'styled-components';
import mainLogo from '../../assets/images/deco.logo.jpg';

const MainLogo = () => {
    return (
        <MainLogoContainer>
        <img className="mainLogo" src={mainLogo}/>
        <span>DECO ETCÉTERA</span>
        </MainLogoContainer>
    )
}

const MainLogoContainer = styled.div`
width:300px;
height:50%;
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
justify-content:space-around;
align-items:center;
padding:10px;

img{
    border-radius:200px;
    width:60px;
    height:60px;
}

span{
    margin-left:10px;
    width:300px;
    height:100%;
    font-size:2em;
}
`

export default MainLogo;
