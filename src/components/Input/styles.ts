import styled, { css } from 'styled-components'

interface InputContainerProps {
  required?: boolean
  grow?: boolean
  width?: string
}

export const InputContainer = styled.div<InputContainerProps>`
  flex-grow: ${(props) => (props.grow ? 1 : 0)};
  width: ${(props) => props.width || 'auto'};
  position: relative;

  ${(props) =>
    !props.required &&
    css`
      &::after {
        content: 'Opcional';
        font-size: 0.75rem;
        font-style: italic;
        color: ${props.theme['gray-600']};
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
      }
    `}
`

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  padding: 0.75rem;
  ${(props) =>
    !props.required &&
    css`
      padding-right: 4rem;
    `}

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
