import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > * {
    font-family: "Star Jedi", sans-serif;
    text-align: center;
    user-select: none;
  }

  @media all and (max-width: 1024px) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;
  }

  @media all and (max-width: 425px) {
    margin-bottom: 15px;
  }
`
const Star = styled.h1`
  line-height: 0.7;
  font-size: 180px;
  transform-style: preserve-3d;
  transform: perspective(8cm) rotateX(40deg) rotateY(0);

  @media all and (min-width: 2000px) {
    line-height: 0.75;
    font-size: 8vw;
  }

  @media all and (max-width: 1440px) {
    line-height: 6.4vw;
    font-size: 9.5vw;
  }

  @media all and (max-width: 1024px) {
    margin-right: 0.8vw;
    line-height: 1;
  }
`
const Wars = styled(Star)`
  line-height: 0.35;

  @media all and (max-width: 1024px) {
    margin-right: 18px;
    line-height: 1;
  }

  @media all and (max-width: 425px) {
    margin-right: 10px;
  }
`
const Library = styled.h2`
  font-size: 40px;
  letter-spacing: 8px;
  color: var(--white);

  @media all and (max-width: 1440px) {
    font-size: 1.8vw;
  }

  @media all and (max-width: 1024px) {
    order: 1;
    font-size: 3.8vw;
    line-height: 1.5;
  }

  @media all and (max-width: 768px) {
    line-height: 1.6;
    letter-spacing: 5px;
  }
`

export default function Heading() {
  return(
    <Wrapper>
      <Star>star</Star>
      <Library>library</Library>
      <Wars>wars</Wars>
    </Wrapper>
  )
}