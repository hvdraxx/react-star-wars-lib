import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 120px;
  margin-bottom: 30px;

  @media all and (max-width: 1440px) {
    padding: 0 25px;
  }

  @media all and (max-width: 1024px) {
    padding: 0 75px;
    margin-bottom: 1.2vw;
  }

  @media all and (max-width: 425px) {
    padding: 0 25px;
    margin-bottom: 8px;
  }
`