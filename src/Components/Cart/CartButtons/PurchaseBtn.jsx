import React from 'react';
import styled from 'styled-components';
import '../../../Styles/styles.css'

const PurchaseBtn = ({text}) => {
    return (
        <ButtonContainer className='drawerBtn'>
            <div className='btn'>
                <span>{text}</span>
            </div>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width:150px;
`

export default PurchaseBtn
