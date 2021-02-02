import styled from 'styled-components'

export const Wrapper = styled.section`
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