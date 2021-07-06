import React from 'react'
import styled from 'styled-components';
import mainLogo from '../../assets/images/deco.logo.jpg';
import '../../Styles/styles.css'

const MainLogo = () => {
    return (
        <MainLogoContainer className='mainLogoContainer'>
        <img className="mainLogo" src={mainLogo} alt="MainLogo"/>
        <span className="mainDecoEtcetera">DECO ETCÉTERA</span>
        </MainLogoContainer>
    )
}

const MainLogoContainer = styled.div`
display:flex;
`

export default MainLogo;
