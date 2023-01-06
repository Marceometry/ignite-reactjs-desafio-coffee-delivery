import { CoffeeList, LandingSection } from './components'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <LandingSection />
      <CoffeeList />
    </HomeContainer>
  )
}
