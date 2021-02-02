import styled from 'styled-components';

export const List = styled.ul`
width: 100%;
padding: 0 50px;

@media all and (max-width: 1440px) {
  padding: 0 25px;
}

@media all and (max-width: 1024px) {
  height: auto;
  padding: 0 25px 0 12.5px;
}

@media all and (max-width: 425px) {
  padding: 0 10px 0 5px;
}
`