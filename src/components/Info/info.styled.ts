import styled from 'styled-components';

export const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 31%;

@media all and (max-width: 1024px) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  width: 100%;
  align-items: start;
}
`