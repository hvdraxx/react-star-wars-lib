import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import ResultsItem from './ResultsItem/ResultsItem'
import { ResultsListProps } from '../../../types/results.types'
import { ImapDataStateToProps } from '../../../types/redux.types'
import { List } from './resultsList.styled'

const ResultsList = ({items}: ResultsListProps) => {
  // remove checked attribute
  const list: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[name=item]')
  Object.values(list).map((item) => {
    if (item.checked) item.checked = false
    return null
  })

  return (
      <TransitionGroup component={List} appear>
        {items.map((item) => (
            <CSSTransition
              key={`${item.name}/transition`}
              timeout={600}
              classNames="results"
            >

              {<ResultsItem key={item.name} item={item}/>}

            </CSSTransition>
        ))}
      </TransitionGroup>
  )
}

const mapStateToProps = (state: ImapDataStateToProps) => {
  return {
    items: state.data.response
  }
}

export default connect(mapStateToProps, null)(ResultsList)