import React, { createContext, useCallback, useContext, useState } from 'react'
import { CartItem, CheckoutFormData } from './types'

export type CheckoutContextData = {
  itemsInCart: CartItem[]
  updateItemInCart: (id: string, quantity: number) => void
  removeItemFromCart: (id: string) => void
  paymentFormId: string
  submitCheckoutForm: (data: CheckoutFormData) => void
  paymentData: CheckoutFormData | null
}

export type CheckoutContextProviderProps = {
  children: React.ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextData)

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([])
  const [paymentData, setPaymentData] = useState<CheckoutFormData | null>(null)
  const paymentFormId = 'checkout-payment-form'

  const updateItemInCart = useCallback((id: string, quantity: number) => {
    setItemsInCart((state) => {
      const newItem = { id, quantity }
      if (state.length === 0) return [newItem]

      const itemIndex = state.findIndex((item) => item.id === id)
      if (itemIndex === -1) return [...state, newItem]

      return state.map((item) => {
        if (item.id !== id) return item
        return newItem
      })
    })
  }, [])

  const removeItemFromCart = (id: string) => {
    setItemsInCart((state) => state.filter((item) => item.id !== id))
  }

  const submitCheckoutForm = (data: CheckoutFormData) => setPaymentData(data)

  return (
    <CheckoutContext.Provider
      value={{
        itemsInCart,
        updateItemInCart,
        removeItemFromCart,
        paymentFormId,
        submitCheckoutForm,
        paymentData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext)
