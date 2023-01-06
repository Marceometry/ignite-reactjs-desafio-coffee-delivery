import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react'

type CartItem = {
  id: string
  quantity: number
}

export type CheckoutContextData = {
  itemsInCart: CartItem[]
  updateItemInCart: (id: string, quantity: number) => void
  removeItemFromCart: (id: string) => void
}

export type CheckoutContextProviderProps = {
  children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextData)

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([])

  console.log(itemsInCart)

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

  return (
    <CheckoutContext.Provider
      value={{ itemsInCart, updateItemInCart, removeItemFromCart }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext)
