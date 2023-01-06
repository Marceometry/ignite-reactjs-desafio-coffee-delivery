import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 3.5rem;
  }
`

export const CoffeeListItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
`
