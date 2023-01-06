import { useEffect, useState } from 'react'
import { Trash } from 'phosphor-react'
import { CoffeeItemInCart } from '@/@types/coffee'
import { formatPriceInCents } from '@/utils'
import { useCheckoutContext } from '@/contexts'
import { InputNumber } from '@/components'
import { CartListItemContainer, RemoveItemButton } from './styles'

interface CartListItemProps {
  item: CoffeeItemInCart
}

export const CartListItem = ({ item }: CartListItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity || 0)
  const { updateItemInCart, removeItemFromCart } = useCheckoutContext()

  useEffect(() => {
    if (item.quantity === itemQuantity) return
    updateItemInCart(item.id, itemQuantity)
  }, [item, itemQuantity, updateItemInCart])

  return (
    <CartListItemContainer key={item.id}>
      <img src={item.imageUrl} alt={`Ilustração do café "${item.name}"`} />
      <div>
        <span>{item.name}</span>
        <div>
          <InputNumber value={itemQuantity} onChange={setItemQuantity} />
          <RemoveItemButton onClick={() => removeItemFromCart(item.id)}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </div>
      </div>
      <strong>
        R$ {formatPriceInCents(item.priceInCents * (item.quantity || 0))}
      </strong>
    </CartListItemContainer>
  )
}
