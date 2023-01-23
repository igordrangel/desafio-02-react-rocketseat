import { HeaderCartContainer, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <HeaderCartContainer>
        <Button color="secondary" size="small">
          <MapPin size={22} weight="fill" />
          Campos dos Goytacazes, RJ
        </Button>

        <NavLink to="/carrinho">
          <Button badge={cart.totalQty} color="accent" size="small">
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </NavLink>
      </HeaderCartContainer>
    </HeaderContainer>
  )
}
