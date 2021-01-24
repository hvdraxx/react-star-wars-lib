import React from 'react';
import DataList from './DataList/DataList';
import ResponseError from '../ResponseError/ResponseError';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;
`

export default function DataSection(props) {
  return(
    <Wrapper>
      {props.notFound ? <ResponseError responseStatus={props.responseStatus}/> : <DataList selectedItem={props.selectedItem}/>}
    </Wrapper>
  )
}