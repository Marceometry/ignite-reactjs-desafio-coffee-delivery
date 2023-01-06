import React from 'react'
import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

type InputNumberProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  onChange: (inputValue: number) => void
  value: number
}

export const InputNumber = ({
  onChange,
  value,
  ...props
}: InputNumberProps) => {
  const handleChange = (inputValue: number) => {
    if (inputValue < 0 || inputValue > 99) return
    onChange(inputValue)
  }

  const handleMinus = () => onChange(value - 1)

  const handlePlus = () => onChange(value + 1)

  return (
    <InputNumberContainer>
      <button onClick={handleMinus} disabled={value === 0}>
        <Minus />
      </button>
      <input
        {...props}
        type="text"
        value={String(value || '').padStart(2, '0')}
        onChange={(e) => handleChange(Number(e.target.value))}
      />
      <button onClick={handlePlus} disabled={value === 99}>
        <Plus />
      </button>
    </InputNumberContainer>
  )
}
