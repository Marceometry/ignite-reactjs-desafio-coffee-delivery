import { CoffeeItemInCart } from '@/@types/coffee'
import { coffeeList } from '@/constants'
import { useCheckoutContext } from '@/contexts'
import { CoffeeCard } from './CoffeeItem'
import { CoffeeListContainer, CoffeeListItemsContainer } from './styles'

export const CoffeeList = () => {
  const { itemsInCart } = useCheckoutContext()

  const itemList = !itemsInCart.length
    ? coffeeList
    : coffeeList.reduce((acc, coffee) => {
        const itemInCart = itemsInCart.find((item) => item.id === coffee.id)
        return [...acc, { ...coffee, quantity: itemInCart?.quantity }]
      }, [] as CoffeeItemInCart[])

  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeListItemsContainer>
        {itemList.map((item) => (
          <CoffeeCard key={item.id} item={item} />
        ))}
      </CoffeeListItemsContainer>
    </CoffeeListContainer>
  )
}
