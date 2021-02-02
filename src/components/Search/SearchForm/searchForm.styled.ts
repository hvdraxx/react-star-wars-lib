import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Heading = styled.h3`
  font-size: 30px;
  font-weight: bold;
  word-spacing: 3px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 15px;

  @media all and (max-width: 1200px) {
    font-size: 2.3vw;
  }

  @media all and (max-width: 1024px) {
    margin-bottom: 2vw;
    font-size: 3vw;
    text-transform: uppercase;
  }

  @media all and (max-width: 425px) {
    font-size: 13px;
  }
`