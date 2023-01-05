import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const LocationBadge = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 6px;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme['purple-700']};
  }
`
