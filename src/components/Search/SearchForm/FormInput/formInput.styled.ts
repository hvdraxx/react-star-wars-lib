import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;

  @media all and (max-width: 1024px) {
    padding: 0;
  }
`
export const Input = styled.input`
  width: 100%;
  border: 2px solid var(--white);
  margin-bottom: 20px;
  padding: 10px;
  color: var(--white);
  background-color: transparent;
  transition: 0.3s;

  &::placeholder {
    font-family: 'Open sans', serif;
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
  }

  &:focus {
    border-color: var(--white);
    outline: none;
    box-shadow: 0 0 10px white;
  }

  &:focus&::placeholder {
    color: var(--white);
  }

  &:hover {
    box-shadow: 0 0 10px white;
  }

  @media all and (max-width: 425px) {
    margin-bottom: 15px;
    padding: 7px;
    font-size: 16px;
  }
`