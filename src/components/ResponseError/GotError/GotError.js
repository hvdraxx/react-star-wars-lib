import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`
const TextWrong = styled.p`
  font-size: 24px;
`
const TextAgain = styled.p`
  font-family: "Star Jedi";
  font-size: 26px;
  letter-spacing: 4px;
  color: var(--white);
`

export default function GotError() {
  return(
    <Wrapper>
      <TextWrong>Something went wrong</TextWrong>
      <TextAgain>Try again.</TextAgain>
    </Wrapper>
  )
}
