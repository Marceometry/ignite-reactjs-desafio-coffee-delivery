import React from 'react'
import { StyledInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  grow?: boolean
  width?: string
}

export const Input = (props: InputProps) => {
  const { grow, width, ...rest } = props

  return <StyledInput {...rest} grow={grow} width={width} />
}
