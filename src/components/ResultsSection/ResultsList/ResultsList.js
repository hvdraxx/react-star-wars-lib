/* eslint-disable array-callback-return */
import React from 'react';
import { ListItem } from './ListItem/ListItem';
import styled from 'styled-components';

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

export const ResultsList = (props) => {

  const items = props.items.map((item) => 
    <ListItem key={item.name}
              item={item}
              selectItem={props.selectItem}
              showItem={props.showItem}
    />
  )

  // remove checked attribute 
  const list = document.querySelectorAll('input[name=item]')
  Object.values(list).map((item) => {
    if (item.checked) item.checked = false
  })

  return (
    <List>
      {items}
    </List>
  )
}