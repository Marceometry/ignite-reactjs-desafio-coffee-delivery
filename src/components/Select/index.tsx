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
}

export const Select = ({ options }: SelectProps) => {
  return (
    <SelectContainer>
      {options.map((option) => {
        const Icon = icons[option.icon]
        return (
          <SelectOption key={option.value}>
            <Icon size={16} />
            <span>{option.label}</span>
          </SelectOption>
        )
      })}
    </SelectContainer>
  )
}
