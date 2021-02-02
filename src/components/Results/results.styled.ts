import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 31%;

  @media all and (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 100%;
    heigh: 100vh;
  }
`