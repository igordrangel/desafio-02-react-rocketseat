import { HeaderCartContainer, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <HeaderCartContainer>
        <Button color="secondary" size="small">
          <MapPin size={22} weight="fill" />
          Campos dos Goytacazes, RJ
        </Button>

        <Button badge={cart.totalQty} color="accent" size="small">
          <ShoppingCart size={22} weight="fill" />
        </Button>
      </HeaderCartContainer>
    </HeaderContainer>
  )
}
