/* eslint-disable array-callback-return */
import React from 'react';
import { ListItem } from './ListItem/ListItem';
import styled from 'styled-components';
import { ResultsListProps } from '../../../types/types';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 50px;

  @media all and (max-width: 1440px) {
    padding: 0 25px;
  }

  @media all and (max-width: 1024px) {
    height: auto;
    padding: 0 12.5px 0 25px;
  }

  @media all and (max-width: 425px) {
    padding: 0 5px 0 10px;
  }
`

export const ResultsList = ({items, selectItem, triggerItem}: ResultsListProps) => {

  const results = items!.map((item) => 
    <ListItem key={item.name}
              item={item}
              selectItem={selectItem}
              triggerItem={triggerItem}
    />
  )

  // remove checked attribute 
  const list: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name=item]')
  Object.values(list).map((item) => {
    if (item.checked) item.checked = false
  })

  return (
    <List>
      {results}
    </List>
  )
}