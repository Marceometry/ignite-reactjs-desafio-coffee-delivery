import { Trash } from 'phosphor-react'
import { InputNumber } from '@/components'
import { coffeeList } from '@/constants'
import { formatPriceInCents } from '@/utils'
import {
  CartContainer,
  CartFinalPrice,
  CartInfoContainer,
  CartListItem,
  RemoveItemButton,
} from './styles'

const list = [coffeeList[0], coffeeList[1]]

export const Cart = () => {
  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>

      <CartInfoContainer>
        {list.map((item) => (
          <CartListItem key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div>
              <span>{item.name}</span>
              <div>
                <InputNumber />
                <RemoveItemButton>
                  <Trash size={16} />
                  <span>Remover</span>
                </RemoveItemButton>
              </div>
            </div>
            <strong>R$ {formatPriceInCents(item.priceInCents)}</strong>
          </CartListItem>
        ))}

        <CartFinalPrice>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>

          <button>Confirmar Pedido</button>
        </CartFinalPrice>
      </CartInfoContainer>
    </CartContainer>
  )
}
