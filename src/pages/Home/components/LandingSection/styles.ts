import styled from 'styled-components'

export const LandingSectionContainer = styled.section`
  width: 100%;
  padding: 6rem 0;
  display: flex;
  justify-content: space-between;
`

export const LandingSectionContent = styled.div`
  width: 60%;
  max-width: 588px;

  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-size: 3rem;
    line-height: 4rem;
  }

  p {
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    margin: 1rem 0 4rem;
  }
`

export const LandingSectionItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 1.25rem 0;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const LandingSectionImageContainer = styled.div`
  display: grid;
  place-items: center;
`
