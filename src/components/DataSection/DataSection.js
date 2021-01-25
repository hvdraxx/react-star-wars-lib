import React from 'react';
import DataList from './DataList/DataList';
import ResponseError from '../ResponseError/ResponseError';
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

export default function DataSection(props) {
  return(
    <Wrapper>
      {props.notFound ? <ResponseError responseStatus={props.responseStatus}/> : <DataList selectedItem={props.selectedItem}/>}
    </Wrapper>
  )
}