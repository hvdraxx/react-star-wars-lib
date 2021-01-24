import React from 'react';
import styles from './app.module.css';
import SearchSection from './SearchSection/SearchSection';
import ResultSection from './ResultsSection/ResultsSection';
import DataSection from './DataSection/DataSection';
import Modal from './Modal/Modal';

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
      <div className={styles.container}>
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
      </div>
    )
  }
}