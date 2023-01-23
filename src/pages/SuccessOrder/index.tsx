import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessOrderContainer } from './styles'
import deliveryArt from '../../assets/delivery-art.png'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function SuccessOrder() {
  const { order } = useContext(CartContext)

  return (
    <SuccessOrderContainer>
      <div className="message">
        <h2>Uhu! pedido confirmado</h2>
        <small>Agora é só aguardar que logo o café chegará até você</small>
      </div>
      <div className="order-content">
        <div className="order-info">
          <div className="order-info-border-wrap"></div>
          <ul>
            <li>
              <span>
                <MapPin size={16} weight="fill" />
              </span>
              <p>
                Entrega em{' '}
                <strong>
                  {order?.street}, {order?.streetNumber}
                </strong>
                <br />
                {order?.district} - {order?.city}, {order?.state}
              </p>
            </li>
            <li>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </li>
            <li>
              <span>
                <CurrencyDollar size={16} weight="fill" />
              </span>
              <p>
                Pagamento na entrega
                <br />
                <strong>{order?.paymentType}</strong>
              </p>
            </li>
          </ul>
        </div>
        <img src={deliveryArt} alt="" />
      </div>
    </SuccessOrderContainer>
  )
}
