import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ResultsList } from './ResultsList/ResultsList';
import styled from 'styled-components';
import { ResultsSectionProps } from '../../types/types';

const Wrapper = styled.section`
  width: 31%;

  @media all and (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 100%;
    heigh: 100vh;
  }
`

export const ResultsSection = ({transition, items, selectItem, triggerItem}: ResultsSectionProps) => {
  return (
    <Wrapper>
        <TransitionGroup component={null}>
          {transition && (
            <CSSTransition classNames="results" timeout={500}>
              <ResultsList items={items} selectItem={selectItem} triggerItem={triggerItem}/>
            </CSSTransition>
          )}
        </TransitionGroup>
    </Wrapper>
  )
}