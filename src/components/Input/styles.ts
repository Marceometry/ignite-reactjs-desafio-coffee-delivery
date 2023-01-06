import styled from 'styled-components'

interface StyledInputProps {
  grow?: boolean
  width?: string
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  flex-grow: ${(props) => (props.grow ? 1 : 0)};
  width: ${(props) => props.width || 'auto'};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
