import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-900']};
  background-color: ${(props) => props.theme['gray-400']};

  button {
    display: grid;
    place-items: center;
    background: none;
    transition: color 0.2s;
    color: ${(props) => props.theme['purple-500']};

    &:hover:not(:disabled) {
      color: ${(props) => props.theme['purple-700']};
    }
  }

  input {
    width: 1.125rem;
  }
`
