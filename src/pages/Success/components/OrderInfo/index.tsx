import { IconCircle } from '@/components'
import { OrderInfoCard, OrderInfoCardItem, OrderInfoContainer } from './styles'

export const OrderInfo = () => {
  return (
    <OrderInfoContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderInfoCard>
        <div>
          <OrderInfoCardItem>
            <IconCircle icon="mapPin" backgroundColor="purple" />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </OrderInfoCardItem>
          <OrderInfoCardItem>
            <IconCircle icon="timer" backgroundColor="yellow-light" />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInfoCardItem>
          <OrderInfoCardItem>
            <IconCircle icon="currency" backgroundColor="yellow-dark" />
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </OrderInfoCardItem>
        </div>
      </OrderInfoCard>
    </OrderInfoContainer>
  )
}
