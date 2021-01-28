import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FormInput } from './FormInput/FormInput';
import { FormRadio } from './FormRadio/FormRadio';
import { FormButton } from './FormButton/FormButton';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Heading = styled.h3`
  font-size: 30px;
  font-weight: bold;
  word-spacing: 3px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 15px;

  @media all and (max-width: 1200px) {
    font-size: 2.3vw;
  }

  @media all and (max-width: 1024px) {
    margin-bottom: 2vw;
    font-size: 3vw;
    text-transform: uppercase;
  }

  @media all and (max-width: 425px) {
    font-size: 13px;
  }
`

export const SearchForm = (props) => {
  const [value, setValue] = useState('')
  const [option, setOption] = useState('people')

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (value === '') {
      props.setResponseStatus('empty');
      props.triggerModal();
    }
    else {
      let url = `https://swapi.dev/api/${option}/?search=${value}`;
      let response = await fetch(url);
      if (response.status !== 200) {
        props.setResponseStatus(response.status);
        props.triggerModal();
        props.setSelectedItem([]);
        props.showResults(false);
        props.showItem(false);
      }
      else {
        let result   = await response.json();
        const data   = result.results;
      
        props.setResponse(data);
        props.setResponseStatus(response.status);
        props.showResults(true);

        if (response.status === 200 && data.length === 0) {
          props.setResponseStatus('notFound')
          props.triggerModal();
          props.setSelectedItem([]);
          props.showResults(false);
          props.showItem(false);
        }
      }
    }
    setValue('');
  }

  return (
    <TransitionGroup component={null} appear in>
      {true && (
        <CSSTransition classNames="form" timeout={1000} >
          <Form onSubmit={handleSubmit}>
            <Heading>
              what would you like to find?
            </Heading>
            <FormRadio handleOption={(option) => {setOption(option)}}/>
            <FormInput 
              handleValue={(event) => {setValue(event.target.value)}}
              value={value}
            />
            <FormButton />
          </Form>
        </CSSTransition>
      )}
  </TransitionGroup>
  )
}