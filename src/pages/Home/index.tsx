import { CoffeeList, LandingSection } from './components'
import { HomeBackground, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeBackground />
      <LandingSection />
      <CoffeeList />
    </HomeContainer>
  )
}
