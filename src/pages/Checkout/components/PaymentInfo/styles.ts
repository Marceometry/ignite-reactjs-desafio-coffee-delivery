import styled from 'styled-components'

export const PaymentInfoContainer = styled.div`
  width: 60%;
  max-width: 40rem;
`

export const PaymentInfoBox = styled.div`
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface PaymentInfoBoxTitleProps {
  iconColor: 'yellow' | 'purple'
}

export const PaymentInfoBoxTitle = styled.div<PaymentInfoBoxTitleProps>`
  display: flex;
  gap: 0.75rem;
  color: ${(props) =>
    props.iconColor === 'purple'
      ? props.theme['purple-500']
      : props.theme['yellow-700']};

  span {
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`

export const PaymentInfoAddressForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
