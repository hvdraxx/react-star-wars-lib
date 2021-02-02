import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Wrapper, Star, Wars, Library } from './heading.styled';

export const Heading = () => {
  return(
    <TransitionGroup component={null} appear in>
      {true && (
        <CSSTransition classNames="heading" timeout={1000} >
          <Wrapper>
            <Star>star</Star>
            <Library>library</Library>
            <Wars>wars</Wars>
          </Wrapper>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}