import styled, { css } from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

interface SelectOptionProps {
  isSelected?: boolean
}

export const SelectOption = styled.button<SelectOptionProps>`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['gray-400']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  transition-property: background-color, border-color;
  transition-duration: 0.2s;

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  ${(props) =>
    props.isSelected
      ? css`
          background-color: ${(props) => props.theme['purple-100']};
          border: 1px solid ${(props) => props.theme['purple-500']};
        `
      : css`
          &:hover {
            background-color: ${(props) => props.theme['gray-500']};
            border-color: ${(props) => props.theme['gray-500']};
          }
        `}
`
