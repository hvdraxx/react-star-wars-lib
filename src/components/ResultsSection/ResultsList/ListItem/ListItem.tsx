import React from 'react';
import styled from 'styled-components';
import { ResultsItemProps } from '../../../../types/types';

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media all and (max-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 18px;
    }
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

  @media all and (max-width: 1200px) {
    font-size: 1.6vw;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }

  @media all and (max-width: 425px) {
    padding: 4px 6px;
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

export const ListItem = ({item, selectItem, triggerItem}: ResultsItemProps) => {
  return(
    <Item>
      <Radio 
        type="radio"
        name='item'
        id={item.name}
      />

      <Label 
        htmlFor={item.name}
        onClick={ () => {
          selectItem(item);
          triggerItem(true);
      }}>
          
          {item.name}

      </Label>
    </Item>
  )
}