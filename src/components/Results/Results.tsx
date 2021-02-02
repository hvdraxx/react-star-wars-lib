import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ResultsList from './ResultsList/ResultsList'
import { Loader } from '../Loader/Loader'
import { ResultsProps } from '../../types/results.types'
import { Wrapper } from './results.styled'

export const Results = ({loading}: ResultsProps) => {
  return (
    <Wrapper>

      {loading ? 
        <TransitionGroup component={null} appear>
          <CSSTransition classNames="loader" timeout={500}>
            <Loader />
          </CSSTransition> 
        </TransitionGroup>
      :   
        <ResultsList items={[]}/>}

    </Wrapper>
  )
}