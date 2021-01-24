import React from 'react';
import styled from 'styled-components';

const Radio = styled.input`
  display: none;

  &:checked ~ * {
    color: var(--white);
    text-decoration: underline;
  }
`
const Label = styled.label`
  font-size: 24px;

  &:hover {
    cursor: pointer;
    color: var(--white);
    text-decoration: underline;
  }

  &:focus {
    color: var(--white);
    text-decoration: underline;
  }
`

export default function RadioButton(props) {
  return(
    <div>

      <Radio type='radio' 
             name='option' 
             id={props.value}
             defaultChecked={props.checked}/>

      <Label htmlFor={props.value} onClick={() => {props.handleOption(props.value)}}>
        {props.value}
      </Label>

    </div>
  )
}