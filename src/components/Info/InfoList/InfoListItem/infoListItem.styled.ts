import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 8px;
  border: 1px solid var(--white);

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media all and (max-width: 1200px) {
    font-size: 1.4vw;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }

  @media all and (max-width: 425px) {
    padding: 4px 6px;
  }
`
export const Name = styled.span`
  @media all and (max-width: 1200px) {
    font-size: 1.6vw;
  }

  @media all and (max-width: 768px) {
    font-size: 14px;
  }
`
export const Value = styled(Name)`
  color: var(--white)
`