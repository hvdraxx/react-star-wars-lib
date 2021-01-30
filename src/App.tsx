import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SearchSection } from './components/SearchSection/SearchSection';
import { ResultsSection } from './components/ResultsSection/ResultsSection';
import { DataSection } from './components/DataSection/DataSection';
import { Modal } from './components/Modal/Modal';
import styled from 'styled-components';
import { Data } from './types/types';

const Wrapper = styled.section`
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

export const App = () => {
  const [response, setResponse] = useState<Data[]>([]);
  const [responseStatus, setResponseStatus] = useState<string | number>(0)
  const [selectedItem, setSelectedItem] = useState<Data>({});
  const [showModal, toggleModal] = useState<boolean>(false);
  const [showResults, toggleResults] = useState<boolean>(false);
  const [showItem, toggleItem] = useState<boolean>(false);

  return(
    <Wrapper>

      <TransitionGroup component={null}>
        {showModal && (
          <CSSTransition classNames="modal" timeout={400}>
            <Modal status={responseStatus} 
                   triggerModal={()=> {toggleModal(!showModal)}}/> 
          </CSSTransition>
        )}
      </TransitionGroup>

      <ResultsSection 
        items={response}
        selectItem={(item) => {setSelectedItem(item)}}
        triggerItem={(showOrNot) => {toggleItem(showOrNot)}}
        transition={showResults}
      />

      <SearchSection 
        setResponse={(data) => {setResponse(data)}}
        setResponseStatus={(status) => {setResponseStatus(status)}}
        setSelectedItem={(clear) => {setSelectedItem(clear)}}
        triggerModal={() => {toggleModal(!showModal)}}
        triggerResults={(showOrNot) => toggleResults(showOrNot)}
        triggerItem={(showOrNot) => toggleItem(showOrNot)}
      />

      <DataSection
        item={selectedItem}
        transition={showItem}
      />

    </Wrapper>
  )
}