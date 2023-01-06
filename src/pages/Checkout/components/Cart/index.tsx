import { useNavigate } from 'react-router-dom'
import { CoffeeItemInCart } from '@/@types/coffee'
import { useCheckoutContext } from '@/contexts'
import { formatPriceInCents } from '@/utils'
import { coffeeList } from '@/constants'
import { CartListItem } from './CartListItem'
import { CartContainer, CartFinalPrice, CartInfoContainer } from './styles'

const deliveryCostInCents = 350

export const Cart = () => {
  const navigate = useNavigate()
  const { itemsInCart } = useCheckoutContext()

  const itemList = coffeeList.reduce((acc, coffee) => {
    const itemInCart = itemsInCart.find((item) => item.id === coffee.id)
    if (!itemInCart) return acc
    return [...acc, { ...coffee, quantity: itemInCart.quantity }]
  }, [] as CoffeeItemInCart[])

  const totalItemsPrice = itemList.reduce(
    (acc, item) => acc + item.priceInCents * (item.quantity || 0),
    0,
  )

  const handleFormSubmit = () => {
    navigate('/success')
  }

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>

      <CartInfoContainer>
        {itemList.map((item) => (
          <CartListItem key={item.id} item={item} />
        ))}

        <CartFinalPrice>
          <div>
            <span>Total de itens</span>
            <span>R$ {formatPriceInCents(totalItemsPrice)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {formatPriceInCents(deliveryCostInCents)}</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>
              R$ {formatPriceInCents(totalItemsPrice + deliveryCostInCents)}
            </strong>
          </div>

          <button onClick={handleFormSubmit}>Confirmar Pedido</button>
        </CartFinalPrice>
      </CartInfoContainer>
    </CartContainer>
  )
}
