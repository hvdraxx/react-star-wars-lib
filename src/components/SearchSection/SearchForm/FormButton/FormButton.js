import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;
`
const Button = styled.button`
  width: 100%;
  border: 2px solid rgba(255,232,31, 0.2);
  padding: 2px;
  font-family: "Star Jedi";
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--black);
  background-color: rgba(255,232,31, 0.8);
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255,232,31, 0.6);
  }

  &:hover {
    background-color: var(--yellow);
    box-shadow: 0 0 10px rgba(255,232,31, 0.6);
  }
`

export default function FormButton() {
  return(
    <Wrapper>
      <Button type='submit'>
        Find
      </Button>
    </Wrapper>
  )
}