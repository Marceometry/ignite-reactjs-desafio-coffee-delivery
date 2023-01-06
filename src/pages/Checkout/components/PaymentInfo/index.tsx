import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Input, Select } from '@/components'
import {
  PaymentInfoAddressForm,
  PaymentInfoBox,
  PaymentInfoBoxTitle,
  PaymentInfoContainer,
} from './styles'

export const PaymentInfo = () => {
  return (
    <PaymentInfoContainer>
      <h2>Complete seu pedido</h2>

      <PaymentInfoBox>
        <PaymentInfoBoxTitle iconColor="yellow">
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </PaymentInfoBoxTitle>

        <PaymentInfoAddressForm>
          <Input placeholder="CEP" width="40%" />
          <Input placeholder="Rua" width="100%" />
          <Input placeholder="Número" width="40%" />
          <Input placeholder="Complemento" grow />
          <Input placeholder="Bairro" width="40%" />
          <Input placeholder="Cidade" grow />
          <Input placeholder="UF" width="10%" />
        </PaymentInfoAddressForm>
      </PaymentInfoBox>

      <PaymentInfoBox>
        <PaymentInfoBoxTitle iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentInfoBoxTitle>
        <Select
          options={[
            {
              icon: 'credit-card',
              value: 'credit-card',
              label: 'Cartão de Crédito',
            },
            {
              icon: 'bank',
              value: 'debit-card',
              label: 'Cartão de Débito',
            },
            {
              icon: 'money',
              value: 'cash',
              label: 'Dinheiro',
            },
          ]}
        />
      </PaymentInfoBox>
    </PaymentInfoContainer>
  )
}
