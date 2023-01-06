import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
