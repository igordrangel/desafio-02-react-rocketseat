import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pedido-confirmado" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
