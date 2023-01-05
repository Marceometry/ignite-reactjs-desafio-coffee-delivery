import { MapPin } from 'phosphor-react'
import logoCoffeeDelivery from '@/assets/logo-coffee-delivery.svg'
import { IconButton } from '@/components'
import { HeaderContainer, LocationBadge } from './styles'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <div>
        <LocationBadge>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationBadge>

        <IconButton asLink to="/" />
      </div>
    </HeaderContainer>
  )
}
