import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { DataList } from './DataList/DataList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;

  @media all and (max-width: 1024px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 100%;
    align-items: start;
  }
`

export const DataSection = (props) => {
  return(
    <Wrapper>
      <TransitionGroup component={null}>
        {props.transition && (
          <CSSTransition classNames="data" timeout={500}>
            {<DataList item={props.item}/>}
          </CSSTransition>
        )}
      </TransitionGroup>
    </Wrapper>
  )
}