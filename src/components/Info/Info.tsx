import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import InfoList from './InfoList/InfoList'
import { InfoProps } from '../../types/info.types'
import { Loader } from '../Loader/Loader'
import { Wrapper } from './info.styled'

export const Info = ({loading}: InfoProps) => {
  return(
    <Wrapper>

      {loading ? 
        <TransitionGroup component={null} appear>
            <CSSTransition classNames="loader" timeout={400}>
              <Loader />
            </CSSTransition> 
        </TransitionGroup>
      :
        <InfoList />}

    </Wrapper>
  )
}