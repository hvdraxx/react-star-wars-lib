import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';
import { Info } from './components/Info/Info';
import Modal from './components/Modal/Modal';
import { AppProps } from './types/app.types';
import { ImapAppStateToProps } from './types/redux.types';
import { Wrapper } from './app.styled';

const App = ({show, loading}: AppProps) => {
  return(
    <Wrapper>
      
      <TransitionGroup component={null}>
        {show && (
          <CSSTransition classNames="modal" timeout={400}>
            <Modal />
          </CSSTransition>
        )}
      </TransitionGroup>

      <Results loading={loading}/> 
      <Search/>
      <Info loading={loading}/>

    </Wrapper>
  )
}

const mapStateToProps = (state: ImapAppStateToProps) => {
  return {
    loading: state.app.isLoading,
    show: state.app.responseError.show
  }
}

export default connect(mapStateToProps, null)(App)