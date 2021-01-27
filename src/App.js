import React, { useState } from 'react';
import { SearchSection } from './components/SearchSection/SearchSection';
import { ResultsSection } from './components/ResultsSection/ResultsSection';
import { DataSection } from './components/DataSection/DataSection';
import { Modal } from './components/Modal/Modal';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  const [response, setResponse] = useState([]);
  const [responseStatus, setResponseStatus] = useState(undefined)
  const [selectedItem, setSelectedItem] = useState({});
  const [showModal, setShowModal] = useState(false);

  return(
    <Wrapper>
      {showModal ? 
        <Modal 
          status={responseStatus}
          triggerModal={() => {setShowModal(!showModal)}}/> 
        : 
        null
      }

      <ResultsSection 
        items={response}
        selectItem={(item) => {setSelectedItem(item)}}
      />

      <SearchSection 
        setResponse={(data) => {setResponse(data)}}
        setResponseStatus={(status) => {setResponseStatus(status)}}
        setSelectedItem={(clear) => {setSelectedItem(clear)}}
        triggerModal={() => {setShowModal(!showModal)}}
      />

      <DataSection
        item={selectedItem}
      />

    </Wrapper>
  )
}