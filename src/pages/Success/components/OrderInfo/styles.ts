import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-700']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.25rem;
  }
`

export const OrderInfoCard = styled.div`
  margin-top: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-image: linear-gradient(
      ${(props) => props.theme['gray-100']},
      ${(props) => props.theme['gray-100']}
    ),
    linear-gradient(
      102.89deg,
      ${(props) => props.theme['yellow-500']} 2.61%,
      ${(props) => props.theme['purple-500']} 98.76%
    );

  > div {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const OrderInfoCardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    display: block;
  }

  strong {
    font-weight: 700;
  }
`
