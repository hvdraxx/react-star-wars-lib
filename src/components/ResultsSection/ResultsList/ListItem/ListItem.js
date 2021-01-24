import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
const Label = styled.label`
  display: block;
  padding: 10px 0;
  border: 1px solid var(--yellow);
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: var(--white);
    color: var(--white);
  }
`
const Radio = styled.input`
  display: none;

  &:checked ~ * {
    outline: none;
    border-color: var(--white);
    border-radius: none;
    background-color: var(--white);
    color: var(--black);
  }
`

export default function ListItem(props) {
  return(
    <Item>

      <Radio type="radio" 
             name='item'
             id={props.item.name}/>

      <Label htmlFor={props.item.name}
             onClick={ () => {props.selectItem(props.item)}}>
        {props.item.name}
      </Label>

    </Item>
  )
}