import React from 'react';
import Heading from './Heading/Heading';
import SearchForm from './SearchForm/SearchForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 38%;
  padding: 60px 0 140px 0;
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