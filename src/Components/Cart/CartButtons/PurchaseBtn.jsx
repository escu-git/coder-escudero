import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PurchaseBtn = ({text}) => {
    return (
        <ButtonContainer>
<<<<<<< HEAD
             <Button variant="outlined" color="default" >{text}</Button>
=======
             <Button variant="outlined" color="default">{text}</Button>
>>>>>>> main
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width:150px;
`

export default PurchaseBtn
