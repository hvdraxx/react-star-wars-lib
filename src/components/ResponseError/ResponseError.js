import React from 'react';
import NotFound from './NotFound/NotFound';
import GotError from './GotError/GotError';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default function ResponseError(props) {
  return(
    <Wrapper>
      {props.responseStatus === 200 ? <NotFound /> : <GotError />} 
    </Wrapper>
  )
}