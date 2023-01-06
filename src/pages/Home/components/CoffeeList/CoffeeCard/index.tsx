import { CoffeeItem } from '@/@types/coffee'
import { IconButton, Tag } from '@/components'
import {
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardPrice,
  CoffeeCardTagsContainer,
} from './styles'

interface CoffeeCardProps {
  item: CoffeeItem
}

export const CoffeeCard = ({ item }: CoffeeCardProps) => {
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
          <strong>
            {(item.priceInCents / 100).toFixed(2).toLocaleString()}
          </strong>
        </CoffeeCardPrice>
        <div>
          <IconButton colorPalette="purple" onClick={() => {}} />
        </div>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
