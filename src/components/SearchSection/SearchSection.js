import React from 'react';
import Heading from './Heading/Heading';
import SearchForm from './SearchForm/SearchForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 38%;

  @media all and (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-content: start;
    width: 100%;
    margin-bottom: 25px;
    padding: 0 25px; 
  }
  
  @media all and (max-width: 425px) {
    padding: 0 10px;
  }
`

export default function SearchSection(props) {
  return(
    <Wrapper>
      <Heading />
      <SearchForm getResponse={props.getResponse} 
                  triggerModal={props.triggerModal}
                  changeNotFound={props.changeNotFound}/>
    </Wrapper>
  )
}