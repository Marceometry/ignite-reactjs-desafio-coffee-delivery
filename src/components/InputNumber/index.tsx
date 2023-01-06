import React, { useEffect, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputNumber = (props: InputNumberProps) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > 99) setValue(99)
    if (value < 0) setValue(0)
  }, [value])

  const handleMinus = () => setValue((oldValue) => oldValue - 1)

  const handlePlus = () => setValue((oldValue) => oldValue + 1)

  return (
    <InputNumberContainer>
      <button onClick={handleMinus}>
        <Minus />
      </button>
      <input
        {...props}
        type="text"
        value={String(value || '').padStart(2, '0')}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handlePlus}>
        <Plus />
      </button>
    </InputNumberContainer>
  )
}
