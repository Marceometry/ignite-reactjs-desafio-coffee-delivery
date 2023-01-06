import {
  Coffee,
  CurrencyDollar,
  MapPin,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { colors, IconCircleContainer } from './styles'

const icons = {
  cart: ShoppingCart,
  timer: Timer,
  package: Package,
  coffee: Coffee,
  mapPin: MapPin,
  currency: CurrencyDollar,
}

type IconCircleProps = {
  icon: keyof typeof icons
  backgroundColor?: keyof typeof colors
}

export const IconCircle = ({
  icon,
  backgroundColor = 'yellow-dark',
}: IconCircleProps) => {
  const Icon = icons[icon]

  return (
    <IconCircleContainer backgroundColor={backgroundColor}>
      <Icon size={16} weight="fill" />
    </IconCircleContainer>
  )
}
