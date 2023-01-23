import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  CartAddressAndPaymentContainer,
  CartContainer,
  CartFinishOrder,
  CartFormAddressContainer,
  CartFormPaymentContainer,
} from './styles'
import { useForm } from 'react-hook-form'
import { NumberInput } from '../../components/InputNumber'
import { Button } from '../../components/Button'
import { defaultTheme } from '../../styles/themes/default'
import { ChangeEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatMoney } from '../../helpers/formatMoney'
import { Order, Product } from '../../reducers/cart/reducer'
import { useNavigate } from 'react-router-dom'

export function Cart() {
  const { register, handleSubmit } = useForm<Order>()
  const cartState = useContext(CartContext)
  const navigate = useNavigate()

  const { cart, updateProductOnCart, removeToCart, addOrder } = cartState

  function confirmOrder(data: Order) {
    addOrder({
      ...cart,
      ...data,
    })
    navigate('/pedido-confirmado')
  }

  function handleProductQty(
    event: ChangeEvent<HTMLInputElement>,
    product: Product,
  ) {
    updateProductOnCart({
      ...product,
      qty: parseInt(event.target.value),
    })
  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(confirmOrder)}>
        <CartAddressAndPaymentContainer>
          <h4>Complete seu pedido</h4>
          <CartFormAddressContainer>
            <div className="title">
              <MapPinLine className="icon" size={22} />
              <div>
                <h2>Endereço de Entrega</h2>
                <small>Informe o endereço onde deseja receber seu pedido</small>
              </div>
            </div>

            <div className="col-3">
              <input
                type="number"
                required
                placeholder="CEP"
                {...register('zipCode', { valueAsNumber: true })}
              />
            </div>

            <div className="col-12">
              <input
                type="text"
                required
                placeholder="Rua"
                {...register('street')}
              />
            </div>

            <div className="col-3">
              <input
                type="number"
                required
                placeholder="Numero"
                {...register('streetNumber', { valueAsNumber: true })}
              />
            </div>

            <div className="col-9">
              <input
                type="text"
                placeholder="Complemento"
                {...register('streetComplement')}
              />
            </div>

            <div className="col-3">
              <input
                type="text"
                required
                placeholder="Bairro"
                {...register('district')}
              />
            </div>

            <div className="col-7">
              <input
                type="text"
                required
                placeholder="Cidade"
                {...register('city')}
              />
            </div>

            <div className="col-2">
              <input
                type="text"
                required
                placeholder="UF"
                maxLength={2}
                {...register('state')}
              />
            </div>
          </CartFormAddressContainer>

          <CartFormPaymentContainer>
            <div className="title">
              <CurrencyDollar className="icon" size={22} />
              <div>
                <h2>Pagamento</h2>
                <small>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </small>
              </div>
            </div>

            <div className="radio-group">
              <div className="radio-input">
                <input
                  id="radio-cartao-credito"
                  type="radio"
                  value="Cartão de Crédito"
                  required
                  {...register('paymentType')}
                />
                <label htmlFor="radio-cartao-credito">
                  <CreditCard className="icon" size={16} />
                  Cartão de Crédito
                </label>
              </div>

              <div className="radio-input">
                <input
                  id="radio-cartao-debito"
                  type="radio"
                  value="Cartão de Débito"
                  required
                  {...register('paymentType')}
                />
                <label htmlFor="radio-cartao-debito">
                  <Bank className="icon" size={16} />
                  Cartão de Débito
                </label>
              </div>

              <div className="radio-input">
                <input
                  id="radio-dinheiro"
                  type="radio"
                  value="Dinheiro"
                  required
                  {...register('paymentType')}
                />
                <label htmlFor="radio-dinheiro">
                  <Money className="icon" size={16} />
                  Dinheiro
                </label>
              </div>
            </div>
          </CartFormPaymentContainer>
        </CartAddressAndPaymentContainer>

        <CartFinishOrder>
          <h4>Cafés selecionados</h4>
          <div className="cart-order">
            <ul>
              {cart.products.map((product) => {
                return (
                  <li key={product.img}>
                    <div className="product-info-container">
                      <img src={product.img} alt="" />
                      <div className="product-info">
                        <span>{product.name}</span>
                        <div className="btn-group">
                          <NumberInput
                            onChange={(e) => handleProductQty(e, product)}
                            min={1}
                            value={product.qty}
                          />
                          <Button
                            onClick={() => removeToCart(product)}
                            size="small"
                            color="secondaryDefault"
                          >
                            <Trash size={16} color={defaultTheme.purple} />
                            REMOVER
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="product-value-info">
                      <strong>
                        R$ {formatMoney(product.price * (product.qty ?? 1))}
                      </strong>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="value-info">
              <div className="value-line">
                <span>Total de itens</span>
                <span>R$ {formatMoney(cart.totalPrice)}</span>
              </div>

              <div className="value-line">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>

              <div className="value-line">
                <strong>Total</strong>
                <strong>R$ {formatMoney(cart.totalPrice + 3.5)}</strong>
              </div>
            </div>

            <Button
              type="submit"
              className="w-100"
              color="primary"
              disabled={cart.totalQty === 0}
            >
              CONFIRMAR PEDIDO
            </Button>
          </div>
        </CartFinishOrder>
      </form>
    </CartContainer>
  )
}
