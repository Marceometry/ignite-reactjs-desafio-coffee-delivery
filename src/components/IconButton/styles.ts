import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const palettes = {
  yellow: {
    color: 'yellow-700',
    background: 'yellow-100',
    hoverColor: 'gray-200',
    hoverBackground: 'yellow-500',
  },
  purple: {
    color: 'gray-200',
    background: 'purple-700',
    hoverColor: 'purple-700',
    hoverBackground: 'purple-100',
  },
} as const

type IconButtonContainerProps = {
  palette: keyof typeof palettes
  badge?: number
}

const baseIconButtonStyle = css<IconButtonContainerProps>`
  display: grid;
  place-items: center;
  position: relative;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme[palettes[props.palette].color]};
  background-color: ${(props) =>
    props.theme[palettes[props.palette].background]};
  transition-property: color, background-color;
  transition-duration: 0.2s;

  &:hover {
    color: ${(props) => props.theme[palettes[props.palette].hoverColor]};
    background-color: ${(props) =>
      props.theme[palettes[props.palette].hoverBackground]};
  }

  &::after {
    ${(props) => (props.badge ? 'content:"' + props.badge + '";' : '')}
    color: ${(props) => props.theme[palettes[props.palette].background]};
    background-color: ${(props) => props.theme[palettes[props.palette].color]};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.75rem;
    font-weight: 700;
    display: grid;
    place-items: center;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
  }
`

export const IconButtonContainer = styled.button`
  ${baseIconButtonStyle}
`

export const IconButtonContainerAsLink = styled(NavLink)`
  ${baseIconButtonStyle}
`
