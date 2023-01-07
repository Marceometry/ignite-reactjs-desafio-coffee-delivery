import { Bank, CreditCard, Money } from 'phosphor-react'
import { SelectContainer, SelectOption } from './styles'

const icons = {
  bank: Bank,
  money: Money,
  'credit-card': CreditCard,
}

interface Option {
  label: string
  value: string
  icon: keyof typeof icons
}

interface SelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <SelectContainer>
      {options.map((option) => {
        const Icon = icons[option.icon]
        const handleChange = () => {
          if (option.value === value) return
          onChange(option.value)
        }

        return (
          <SelectOption
            key={option.value}
            isSelected={option.value === value}
            onClick={handleChange}
          >
            <Icon size={16} />
            <span>{option.label}</span>
          </SelectOption>
        )
      })}
    </SelectContainer>
  )
}
