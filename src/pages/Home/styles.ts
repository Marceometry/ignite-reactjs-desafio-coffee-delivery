import styled from 'styled-components'
import appBackground from '@/assets/app-background.svg'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }
`

export const HomeBackground = styled.div`
  z-index: -1;
  inset: 0;
  position: absolute;
  background-image: url(${appBackground});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`
