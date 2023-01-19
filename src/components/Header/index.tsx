import { HeaderCartContainer, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <HeaderCartContainer>
        <button>Campos dos Goytacazes, RJ</button>
        <button>
          <ShoppingCart size={22} />
        </button>
      </HeaderCartContainer>
    </HeaderContainer>
  )
}
