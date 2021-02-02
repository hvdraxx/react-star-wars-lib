import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;

  @media all and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`
export const Button = styled.button`
  width: 100%;
  border: 2px solid rgba(255,232,31, 0.2);
  padding: 2px;
  font-family: "Star Jedi";
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: var(--black);
  background-color: rgba(255,232,31, 0.9);
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255,232,31, 0.6);
  }

  &:hover {
    background-color: var(--yellow);
    box-shadow: 0 0 10px rgba(255,232,31, 0.6);
  }

  &:disabled {
    background-color: rgba(255,232,31, 0.6);
    box-shadow: none;
    cursor: not-allowed;
  }

  @media all and (max-width: 1024px) {
    width: 200px;
  }

  @media all and (max-width: 425px) {
    width: 160px;
    padding: 0;
    font-size: 18px;
  }
`