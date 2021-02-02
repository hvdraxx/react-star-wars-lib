import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media all and (max-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`
export const Label = styled.label`
  display: block;
  padding: 10px 0;
  border: 1px solid var(--yellow);
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    border-color: var(--white);
    color: var(--white);
  }
  @media all and (max-width: 1200px) {
    font-size: 1.6vw;
  }
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 425px) {
    padding: 4px 6px;
  }
`
export const Radio = styled.input`
  display: none;
  &:checked ~ * {
    outline: none;
    border-color: var(--white);
    border-radius: none;
    background-color: var(--white);
    color: var(--black);
  }
`