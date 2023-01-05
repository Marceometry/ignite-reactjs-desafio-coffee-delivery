import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '@/layouts'
import { Home } from '@/pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
