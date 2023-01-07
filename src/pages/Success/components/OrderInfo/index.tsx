import { useNavigate } from 'react-router-dom'
import { IconCircle } from '@/components'
import { PaymentMethods, useCheckoutContext } from '@/contexts'
import { OrderInfoCard, OrderInfoCardItem, OrderInfoContainer } from './styles'
import { useEffect } from 'react'

export const OrderInfo = () => {
  const { paymentData } = useCheckoutContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!paymentData) navigate('/checkout')
  }, [navigate, paymentData])

  if (!paymentData) return null

  const address = paymentData.address
  const paymentMethod = PaymentMethods[paymentData.paymentMethod]

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
                Entrega em{' '}
                <strong>
                  {address.street}, {address.number}
                  {address.complement ? ` - ${address.complement}` : ''}
                </strong>
              </span>
              <span>
                {address.district} - {address.city}, {address.uf}
              </span>
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
              <strong>{paymentMethod}</strong>
            </div>
          </OrderInfoCardItem>
        </div>
      </OrderInfoCard>
    </OrderInfoContainer>
  )
}
