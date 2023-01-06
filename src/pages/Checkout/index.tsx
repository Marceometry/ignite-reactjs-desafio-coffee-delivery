import { Cart, PaymentInfo } from './components'
import { CheckoutContainer } from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <PaymentInfo />

      <Cart />
    </CheckoutContainer>
  )
}
