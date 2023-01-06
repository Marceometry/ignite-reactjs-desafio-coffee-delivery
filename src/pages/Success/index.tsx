import deliveryMotorcycle from '@/assets/delivery-motorcycle.svg'
import { OrderInfo } from './components'
import { SuccessContainer } from './styles'

export const Success = () => {
  return (
    <SuccessContainer>
      <OrderInfo />

      <img src={deliveryMotorcycle} alt="" />
    </SuccessContainer>
  )
}
