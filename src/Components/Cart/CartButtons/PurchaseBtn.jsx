import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PurchaseBtn = ({text}) => {
    return (
        <ButtonContainer>
             <Button variant="outlined" color="default" >{text}</Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width:150px;
`

export default PurchaseBtn
