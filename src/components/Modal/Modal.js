import React from 'react';
import styled from 'styled-components';
import { Text } from './ModalText';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 100px;
  background-color: var(--yellow);

  @media all and (max-width: 767px) {
    width: 90%;
    height: auto;
    padding: 30px 25px;
  }
`

const Button = styled.button`
  padding: 10px 35px;
  border: 1px solid var(--black);
  background-color: var(--black);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--black);
    background-color: var(--white);
    box-shadow: 0 0 7px 0 var(--black);
  }

  &:focus {
    outline: none;
  }
`

export const Modal = (props) => {
  return(
    <Overlay>
      <Wrapper>
        <Text status={props.status}/>
        <Button onClick={props.triggerModal}>
          close
        </Button>
      </Wrapper>
    </Overlay>
  )
}