import styled from 'styled-components'

export const CartContainer = styled.div`
  flex: 1;
`

export const CartInfoContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['gray-200']};
`

export const CartListItem = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    > div {
      display: flex;
      gap: 0.5rem;
    }
  }

  strong {
    color: ${(props) => props.theme['gray-700']};
    font-weight: 700;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${(props) => props.theme['purple-500']};
  background-color: ${(props) => props.theme['gray-400']};
  transition: background-color 0.2s;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const CartFinalPrice = styled.div``
