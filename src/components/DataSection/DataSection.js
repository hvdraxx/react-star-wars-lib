import React from 'react';
import { DataList } from './DataList/DataList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;

  @media all and (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%;
    align-items: start;
  }
`

export const DataSection = (props) => {
  return(
    <Wrapper>
      {Object.keys(props.item).length !== 0 ? <DataList item={props.item}/> : null}
    </Wrapper>
  )
}