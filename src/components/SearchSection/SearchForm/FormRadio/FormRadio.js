import React from 'react';
import RadioButton from './RadioButton/RadioButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 120px;
  margin-bottom: 30px;
`

export default function FormRadio(props) {
  return(
    <Wrapper>
      <RadioButton value='people' handleOption={props.handleOption} checked/>
      <RadioButton value='planets' handleOption={props.handleOption}/>
      <RadioButton value='starships' handleOption={props.handleOption}/>
    </Wrapper>
  )
}