import styled from 'styled-components'

export const TagContainer = styled.span`
  display: grid;
  place-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-700']};
`
