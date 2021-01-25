import React from 'react';
import DataListItem from './DataListItem/DataListItem';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  padding: 0 50px;

  @media all and (max-width: 1440px) {
    padding: 0 25px;
  }

  @media all and (max-width: 1024px) {
    height: auto;
    padding: 0 25px 0 12.5px;
  }

  @media all and (max-width: 425px) {
    padding: 0 10px 0 5px;
  }
`

export default function DataList(props) {
  const item = props.selectedItem;

  const configureItem = () => {
    // throw and rename specific keys
    // eslint-disable-next-line array-callback-return
    Object.entries(item).map(([key, value]) => {
      if (value === '') return delete item[key];
      if (key === 'url' || key ===  'created' || key ===  'edited' || key ===  'homeworld') return delete item[key];
      if (Array.isArray(value)) return delete item[key];
      
      if (key.includes('_')) {
        Object.defineProperty(item, key.replace('_', ' '),
            Object.getOwnPropertyDescriptor(item, key));
        delete item[key];
      }
    })
  }

  configureItem();

  const values = Object.entries(item).map(([key, value]) => {
    return (
      <DataListItem key={key} property={key} value={value} />
    );
  });

  return(
      <List>
        {values}
      </List>
  )
}