import { CoffeeItemInCart } from '@/@types/coffee'
import { formatPriceInCents } from '@/utils'
import { useCheckoutContext } from '@/contexts'
import { IconButton, InputNumber, Tag } from '@/components'
import {
  CoffeeCardActions,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardPrice,
  CoffeeCardTagsContainer,
} from './styles'
import { useState } from 'react'

interface CoffeeCardProps {
  item: CoffeeItemInCart
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity || 0)
  const { updateItemInCart, removeItemFromCart } = useCheckoutContext()

  const handleCartButtonClick = (id: string) => {
    itemQuantity === 0
      ? removeItemFromCart(id)
      : updateItemInCart(id, itemQuantity)
  }

  const isCartButtonDisabled = () => {
    if (item.quantity === itemQuantity) return true
    if (itemQuantity === 0 && !item.quantity) return true
    return false
  }

  return (
    <CoffeeCardContainer>
      <img src={item.imageUrl} alt={`Ilustração do café "${item.name}"`} />
      <CoffeeCardTagsContainer>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </CoffeeCardTagsContainer>

      <h3>{item.name}</h3>
      <p>{item.description}</p>

      <CoffeeCardFooter>
        <CoffeeCardPrice>
          <span>R$</span>
          <strong>{formatPriceInCents(item.priceInCents)}</strong>
        </CoffeeCardPrice>

        <CoffeeCardActions>
          <InputNumber value={itemQuantity} onChange={setItemQuantity} />
          <IconButton
            colorPalette="purple"
            onClick={() => handleCartButtonClick(item.id)}
            disabled={isCartButtonDisabled()}
          />
        </CoffeeCardActions>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
