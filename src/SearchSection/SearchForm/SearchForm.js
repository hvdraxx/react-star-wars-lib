import React from 'react';
import FormInput from './FormInput/FormInput';
import FormRadio from './FormRadio/FormRadio';
import FormButton from './FormButton/FormButton';
import styles from './searchForm.module.css';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      option: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue  = this.handleValue.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getData();
  }

  handleValue(event) {
    this.setState({value: event.target.value.trim()})
  }

  handleOption() {
    const optionsList = document.querySelectorAll('.option-input');
    for (let i = 0; i < optionsList.length; i++) {
      if (optionsList[i].checked) {
        this.setState({option: optionsList[i].id})
        return optionsList[i].id
      } 
    }
  }

  async getData() {
    const value  = this.state.value;
    const option = this.handleOption();

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
        this.props.getResponse('', this.state.option, [], response.status);
        this.props.changeNotFound(true)
      }
    }
  }

  render() {
    return(
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h3 className={styles.findText}>
          what would you like to find?
        </h3>
        <FormRadio />
        <FormInput handleValue={this.handleValue}/>
        <FormButton />
      </form>
    )
  }
}
