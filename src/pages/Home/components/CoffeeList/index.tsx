import { coffeeList } from '@/constants'
import { formatPriceInCents } from '@/utils'
import { IconButton, InputNumber, Tag } from '@/components'
import {
  CoffeeCardActions,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardPrice,
  CoffeeCardTagsContainer,
  CoffeeListContainer,
  CoffeeListItemsContainer,
} from './styles'

export const CoffeeList = () => {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeListItemsContainer>
        {coffeeList.map((item) => (
          <CoffeeCardContainer key={item.id}>
            <img
              src={item.imageUrl}
              alt={`Ilustração do café "${item.name}"`}
            />
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
                <InputNumber />
                <IconButton colorPalette="purple" onClick={() => {}} />
              </CoffeeCardActions>
            </CoffeeCardFooter>
          </CoffeeCardContainer>
        ))}
      </CoffeeListItemsContainer>
    </CoffeeListContainer>
  )
}
