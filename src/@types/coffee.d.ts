export type CoffeeItem = {
  id: string
  imageUrl: string
  tags: string[]
  name: string
  description: string
  priceInCents: number
}

export type CoffeeItemInCart = CoffeeItem & {
  quantity?: number
}
