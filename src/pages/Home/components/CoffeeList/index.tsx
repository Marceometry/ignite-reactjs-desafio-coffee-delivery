import { coffeeList } from '@/constants'
import { CoffeeCard } from './CoffeeCard'
import { CoffeeListContainer, CoffeeListItemsContainer } from './styles'

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeListItemsContainer>
        {coffeeList.map((item) => (
          <CoffeeCard key={item.id} item={item} />
        ))}
      </CoffeeListItemsContainer>
    </CoffeeListContainer>
  )
}
