import React from 'react'
import { StyledInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />
}
