import React from 'react'
import styled from 'styled-components';
const Loading = () => {
    return (
        <LoadingContainer>
            <div class="box1"></div>
            <div class="box2"></div>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`

  position: relative;
  width: 100px;
  height: 100px;
  margin: 10%;


.box1, .box2 {
  height: 20px;
  width: 20px;
  background: red;
}

.box1 {
  position: absolute;
  top: 0;
  left: 0;
  animation: move 2s infinite ease-in-out;
}

.box2 {
  position: absolute;
  top: 0;
  left: 0;
  animation: move 2s infinite ease-in-out;
  animation-delay: 1s;
}

@keyframes move {
  25% {transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% {transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% {transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% {transform: rotate(-360deg) }
}

`


export default Loading