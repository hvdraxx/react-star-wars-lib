import React from 'react';
import styled from 'styled-components';
import { ModalTextProps } from '../../types/types';

const Wrapper = styled.p`
  margin-bottom: 25px;
  color: var(--black);
  font-size: 26px;
  font-weight: bold;
  word-spacing: 3px;

  @media all and (max-width: 767px) {
    font-size: 20px;
    text-align: center;
  }
`

const ErrorWrapper = styled.p`
  text-align: center;

  & p {
    color: var(--black);
    font-size: 26px;
    font-weight: bold;
    word-spacing: 3px;
  }
`

const Again = styled(Wrapper)`
  margin-bottom: 0;
  font-family: 'Star Jedi';
  font-size: 30px !important;
  line-height: 1;
`

export const Text = ({ status }: ModalTextProps) => {
  const chooseText = () => {
    if (typeof status !== 'string') 
    return (
      <ErrorWrapper>
        <p>Something went wrong.</p>
        <Again>Try again</Again>
      </ErrorWrapper>
    )
    else {
      if (status === 'empty') return 'Input field should not be empty'
      if (status === 'notFound') return 'Nothing Found';
    }
  }

  return (
    <Wrapper>{chooseText()}</Wrapper>
  )
}