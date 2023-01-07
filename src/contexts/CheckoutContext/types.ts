/* eslint-disable no-unused-vars */

export type PaymentMethod = 'credit_card' | 'debit_card' | 'cash'

export enum PaymentMethods {
  credit_card = 'Cartão de Crédito',
  debit_card = 'Cartão de Débito',
  cash = 'Dinheiro',
}

export type AddressForm = {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
}

export type CheckoutFormData = {
  address: AddressForm
  paymentMethod: PaymentMethod
}

export type CartItem = {
  id: string
  quantity: number
}
