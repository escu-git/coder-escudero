import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PurchaseBtn = ({fn, text}) => {
    return (
        <ButtonContainer>
             <Button variant="outlined" color="default" onClick={fn}>{text}</Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    

`

export default PurchaseBtn
