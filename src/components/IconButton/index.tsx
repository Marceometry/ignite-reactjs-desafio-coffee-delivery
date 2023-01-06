import { ShoppingCart } from 'phosphor-react'
import {
  IconButtonContainer,
  IconButtonContainerAsLink,
  palettes,
} from './styles'

const icons = {
  cart: ShoppingCart,
}

type IconButtonProps = {
  icon?: keyof typeof icons
  colorPalette?: keyof typeof palettes
  badgeNumber?: number
  asLink?: boolean
  to?: string
  onClick?: () => void
}

export const IconButton = ({
  icon = 'cart',
  colorPalette = 'yellow',
  badgeNumber,
  asLink,
  to = '/',
  onClick,
}: IconButtonProps) => {
  const props = { palette: colorPalette, badge: badgeNumber }
  const Icon = icons[icon]

  return asLink ? (
    <IconButtonContainerAsLink {...props} to={to}>
      <Icon size={22} weight="fill" />
    </IconButtonContainerAsLink>
  ) : (
    <IconButtonContainer {...props} onClick={onClick}>
      <Icon size={22} weight="fill" />
    </IconButtonContainer>
  )
}
