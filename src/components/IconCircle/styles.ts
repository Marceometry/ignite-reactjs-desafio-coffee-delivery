import styled from 'styled-components'

export const colors = {
  gray: 'gray-700',
  purple: 'purple-500',
  'yellow-dark': 'yellow-700',
  'yellow-light': 'yellow-500',
} as const

type IconCircleContainerProps = {
  backgroundColor: keyof typeof colors
}

export const IconCircleContainer = styled.div<IconCircleContainerProps>`
  display: grid;
  place-items: center;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[colors[props.backgroundColor]]};
  color: ${(props) => props.theme.white};
`
