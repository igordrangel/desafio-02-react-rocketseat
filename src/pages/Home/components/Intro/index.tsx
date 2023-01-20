import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { InfoContent, IntroContent } from './styles'
import coffeeDeliveryIntro from '../../../../assets/coffee-delivery-intro.png'

export function Intro() {
  return (
    <IntroContent>
      <InfoContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <small>
            Com o Coffee Delivery você receve seu café onde estiver, a qualquer
            hora
          </small>
        </div>

        <ul>
          <li>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </li>
          <li>
            <span>
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </li>
          <li>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </li>
        </ul>
      </InfoContent>

      <img src={coffeeDeliveryIntro} alt="" />
    </IntroContent>
  )
}
