import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > * {
    font-family: "Star Jedi", sans-serif;
    text-align: center;
    user-select: none;
  }
`
const Star = styled.h1`
  line-height: 0.7;
  font-size: 180px;
  transform-style: preserve-3d;
  transform: perspective(8cm) rotateX(40deg) rotateY(0);
`
const Wars = styled(Star)`
  line-height: 0.35;
`
const Library = styled.h2`
  font-size: 40px;
  letter-spacing: 8px;
  color: var(--white);
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