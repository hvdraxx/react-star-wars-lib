import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 8px;
  border: 1px solid var(--white);

  &:not(:last-child) {
    margin-bottom: 18px;
  }
`
const Value = styled.span`
  color: var(--white)
`

export default function DataListItem(props) {
  return(
    <ListItem>
      <span>{props.property}</span>: <Value>{props.value}</Value>
    </ListItem>
  )
}