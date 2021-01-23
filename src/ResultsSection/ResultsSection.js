import React from 'react';
import styles from './resultSection.module.css';
import ResultsList from './ResultsList/ResultsList';
import NotFound from '../NotFound/NotFound';

export default class ResultSection extends React.Component {
  constructor(props) {
    super(props)
    this.whatToRender = this.whatToRender.bind(this);
  }

  whatToRender() {
    if (this.props.notFound) return <NotFound />
    else {
      return (
        <ResultsList response={this.props.response} 
                     selectItem={this.props.selectItem}/>
      )
    }
  }

  render() {
    return(
      <div className={styles.container}>
        {this.props.firstLaunch ? null : this.whatToRender()}
      </div>
    )
  }
}