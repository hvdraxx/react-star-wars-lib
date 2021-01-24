import React from 'react';
import NotFoundSVG from './NotFoundSVG/NotFoundSVG';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  font: bold 40px "Star Jedi";
  letter-spacing: 3px;
  margin-bottom: 25px;
`

export default function NotFound() {
  return(
    <Wrapper>
      <Text>
        nothing found
      </Text>
      <NotFoundSVG />
    </Wrapper>
  )
}