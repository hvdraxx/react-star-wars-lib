import styled from 'styled-components';

export const Radio = styled.input`
  display: none;

  &:checked ~ * {
    color: var(--white);
    text-decoration: underline;
  }
`
export const Label = styled.label`
  font-size: 24px;

  &:hover {
    cursor: pointer;
    color: var(--white);
    text-decoration: underline;
  }

  &:focus {
    color: var(--white);
    text-decoration: underline;
  }

  @media all and (max-width: 1440px) {
    font-size: 1.6vw;
  }

  @media all and (max-width: 1024px) {
    font-size: 2.5vw;
  }

  @media all and (max-width: 425px) {
    font-size: 14px;
  }
`