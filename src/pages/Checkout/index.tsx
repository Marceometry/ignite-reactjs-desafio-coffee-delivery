import { useCheckoutContext } from '@/contexts'
import { Cart, PaymentInfo } from './components'
import { CheckoutContainer, CheckoutEmptyCartContainer } from './styles'

export const Checkout = () => {
  const { itemsInCart } = useCheckoutContext()

  return itemsInCart.length ? (
    <CheckoutContainer>
      <PaymentInfo />

      <Cart />
    </CheckoutContainer>
  ) : (
    <CheckoutEmptyCartContainer>
      <h1>Não há itens no carrinho.</h1>
    </CheckoutEmptyCartContainer>
  )
}
