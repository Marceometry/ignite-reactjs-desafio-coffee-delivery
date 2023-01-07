import React from 'react'
import { InputContainer, StyledInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  grow?: boolean
  width?: string
}

export const Input = (props: InputProps) => {
  return (
    <InputContainer
      grow={props.grow}
      width={props.width}
      required={props.required}
    >
      <StyledInput {...props} />
    </InputContainer>
  )
}
