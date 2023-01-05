import landingSectionImage from '@/assets/landing-section-image.png'
import { IconCircle } from '@/components'
import {
  LandingSectionContainer,
  LandingSectionContent,
  LandingSectionImageContainer,
  LandingSectionItemsGrid,
} from './styles'

export const LandingSection = () => {
  return (
    <LandingSectionContainer>
      <LandingSectionContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <LandingSectionItemsGrid>
          <div>
            <IconCircle icon="cart" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <IconCircle icon="package" backgroundColor="gray" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <IconCircle icon="timer" backgroundColor="yellow-light" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <IconCircle icon="coffee" backgroundColor="purple" />
            <span>O café chega fresquinho até você</span>
          </div>
        </LandingSectionItemsGrid>
      </LandingSectionContent>

      <LandingSectionImageContainer>
        <img src={landingSectionImage} alt="" />
      </LandingSectionImageContainer>
    </LandingSectionContainer>
  )
}
