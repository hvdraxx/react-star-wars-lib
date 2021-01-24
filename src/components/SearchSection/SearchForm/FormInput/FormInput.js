import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;
`
const Input = styled.input`
  width: 100%;
  border: 2px solid var(--white);
  margin-bottom: 20px;
  padding: 10px;
  color: var(--white);
  background-color: transparent;
  transition: 0.3s;

  &::placeholder {
    font-family: 'Open sans', serif;
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
  }

  &:focus {
    border-color: var(--white);
    outline: none;
    box-shadow: 0 0 10px white;
  }

  &:focus&::placeholder {
    color: var(--white);
  }

  &:hover {
    box-shadow: 0 0 10px white;
  }
`

export default function FormInput(props) {
  return(
    <Wrapper>
      <Input
      type="text"
      placeholder="e. g. Skywalker"
      id="inputSearch"
      autoComplete="off"
      onChange={props.handleValue}
      />
    </Wrapper>
  )
}