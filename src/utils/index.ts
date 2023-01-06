export const formatPriceInCents = (price: number) => {
  return (price / 100).toFixed(2).toLocaleString()
}
