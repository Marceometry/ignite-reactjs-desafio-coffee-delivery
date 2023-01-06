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

export const CoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 1.25rem;
  border-radius: 6px 36px;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CoffeeCardTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
`

export const CoffeeCardFooter = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
  }
`

export const CoffeeCardPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: 0.875rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  gap: 0.5rem;
`
