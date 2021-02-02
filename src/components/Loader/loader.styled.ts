import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const outerRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const innerRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`
export const LoaderStyled = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 8px solid var(--yellow);
    border-color: var(--yellow) transparent var(--yellow) transparent;
    animation: ${outerRing} 2.5s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    display: block;
    box-sizing: border-box;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    border: 6px solid var(--yellow);
    border-color: transparent var(--white) transparent var(--white);
    animation: ${innerRing} 1.5s linear infinite;
  }

  @media all and (max-width: 425px) {
    width: 80px;
    height: 80px;

    &::before {
      border-width: 5px
    }

    &::after {
      border-width: 3px
    }
  }
`