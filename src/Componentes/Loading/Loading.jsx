import React from 'react'
import styled from 'styled-components';
import loadingLogo from '../../assets/images/deco.logo.jpg';
const Loading = () => {
    return (
        <LoadingContainer>
            <img src={loadingLogo} class="img1"></img>
            <img src={loadingLogo} class="img2"></img>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`

  position: relative;
  width: 40%;
  height: 40%;
  margin-top:5%;
  margin-left:35%;

.img1, .img2 {
  height: 110px;
  width: 110px;
  border-radius:30px;
}

.img1 {
  position: absolute;
  top: 0;
  left: 0;
  animation: move 2s infinite ease-in-out;
}

.img2 {
  position: absolute;
  top: 0;
  left: 0;
  animation: move 2s infinite ease-in-out;
  animation-delay: 1s;
}

@keyframes move {
  25% {transform: translateX(250px) rotate(-90deg) scale(0.5) }
  50% {transform: translateX(250px) translateY(250px) rotate(-180deg) }
  75% {transform: translateX(0px) translateY(250px) rotate(-270deg) scale(0.5) }
  100% {transform: rotate(-360deg) }
}

`


export default Loading