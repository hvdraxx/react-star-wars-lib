import React from 'react';
import FormInput from './FormInput/FormInput';
import FormRadio from './FormRadio/FormRadio';
import FormButton from './FormButton/FormButton';
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
`

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      option: 'people'
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue  = this.handleValue.bind(this);
    this.handleOption  = this.handleOption.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  handleValue(event) {
    this.setState({value: event.target.value.trim()})
  }

  handleOption(option) {
    this.setState({option})
  }

  async getData() {
    const value  = this.state.value;
    const option = this.state.option;

    if (value === "") {
      this.props.triggerModal();
    }
    else {
      let url      = "https://swapi.dev/api/" + option + "/?search=" + value;
      let response = await fetch(url);

      if (response.ok) {
        let result   = await response.json();
        const data   = result.results;
      
        this.props.getResponse(this.state.value, this.state.option, data, response.status);

        if (data.length === 0) this.props.changeNotFound(true)
        else this.props.changeNotFound(false)
      }
      
      else {
        this.props.getResponse('', '', [], response.status);
        this.props.changeNotFound(true)
      }
    }
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Heading>
          what would you like to find?
        </Heading>
        <FormRadio handleOption={this.handleOption}/>
        <FormInput handleValue={this.handleValue}/>
        <FormButton />
      </Form>
    )
  }
}
