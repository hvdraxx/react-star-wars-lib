import React from 'react';
import styled from 'styled-components';
import { DataItemProps } from '../../../../types/types';

const ListItem = styled.li`
  padding: 8px;
  border: 1px solid var(--white);

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media all and (max-width: 1200px) {
    font-size: 1.4vw;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }

  @media all and (max-width: 425px) {
    padding: 4px 6px;
  }
`
const Name = styled.span`
  @media all and (max-width: 1200px) {
    font-size: 1.6vw;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`
const Value = styled(Name)`
  color: var(--white)
`

export const DataListItem = ({property, value}: DataItemProps) => {
  return(
    <ListItem>
      <Name>{property}</Name>: <Value>{value}</Value>
    </ListItem>
  )
}