import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { PaymentMethod, useCheckoutContext } from '@/contexts'
import { Input, Select } from '@/components'
import {
  PaymentInfoAddressForm,
  PaymentInfoBox,
  PaymentInfoBoxTitle,
  PaymentInfoContainer,
} from './styles'

export const PaymentInfo = () => {
  const [selectValue, setSelectValue] = useState<PaymentMethod | ''>('')
  const { paymentFormId, submitCheckoutForm } = useCheckoutContext()
  const navigate = useNavigate()

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    const data = e.target
    const cep = data.cep?.value
    const street = data.street?.value
    const number = data.number?.value
    const complement = data.complement?.value
    const district = data.district?.value
    const city = data.city?.value
    const uf = data.uf?.value

    if (!selectValue) return alert('Selecione uma forma de pagamento')
    submitCheckoutForm({
      address: { cep, street, number, complement, district, city, uf },
      paymentMethod: selectValue,
    })
    setTimeout(() => navigate('/success'), 100)
  }

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

        <PaymentInfoAddressForm id={paymentFormId} onSubmit={handleFormSubmit}>
          <Input id="cep" placeholder="CEP" width="40%" required />
          <Input id="street" placeholder="Rua" width="100%" required />
          <Input id="number" placeholder="Número" width="40%" required />
          <Input id="complement" placeholder="Complemento" grow />
          <Input id="district" placeholder="Bairro" width="40%" required />
          <Input id="city" placeholder="Cidade" grow required />
          <Input id="uf" placeholder="UF" width="10%" required />
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
          value={selectValue}
          onChange={(value) => setSelectValue(value as PaymentMethod)}
          options={[
            {
              icon: 'credit-card',
              value: 'credit_card',
              label: 'Cartão de Crédito',
            },
            {
              icon: 'bank',
              value: 'debit_card',
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
