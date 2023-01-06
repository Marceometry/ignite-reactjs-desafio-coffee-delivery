import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding-top: 2.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-800']};
  }
`
