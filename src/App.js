import React from 'react';
import SearchSection from './components/SearchSection/SearchSection';
import ResultSection from './components/ResultsSection/ResultsSection';
import DataSection from './components/DataSection/DataSection';
import Modal from './components/Modal/Modal';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 25px 0;

  @media all and (max-width: 1440px) {
    padding: 25px 0;
  }

  @media all and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    height: unset;
    min-height: unset;
  }

  @media all and (max-width: 425px) {
    padding: 10px 0;
  }
`

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      option: '',
      response: [],
      responseStatus: undefined,
      selectedItem: [],
      showModal: false,
      notFound: false,
      firstLaunch: true
    }

    this.getResponse = this.getResponse.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.changeNotFound = this.changeNotFound.bind(this);
  }

  getResponse(value, option, response, responseStatus) {
    this.setState({
      value,
      option,
      response,
      responseStatus,
      firstLaunch: false,
      // reset data section
      selectedItem: []
    })
  }

  triggerModal() {
    this.setState({showModal: !this.state.showModal})
  }

  selectItem(data) {
    this.setState({selectedItem: data})
  }

  changeNotFound(isEmpty) {
    this.setState({notFound: isEmpty ? true : false })
  }

  render() {
    return(
      <Wrapper>
        {this.state.showModal ? <Modal triggerModal={this.triggerModal}/> : null}

        <ResultSection 
        response={this.state.response}
        responseStatus={this.state.responseStatus}
        selectItem={this.selectItem}
        firstLaunch={this.state.firstLaunch}
        notFound={this.state.notFound}/>

        <SearchSection 
        getResponse={this.getResponse}
        triggerModal={this.triggerModal}
        changeNotFound={this.changeNotFound}/>

        <DataSection 
        response={this.state.response}
        responseStatus={this.state.responseStatus}
        selectedItem={this.state.selectedItem}
        notFound={this.state.notFound}/>
      </Wrapper>
    )
  }
}