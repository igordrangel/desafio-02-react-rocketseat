import { CardContainer, CardTags, ProductListContainer } from './styles'
import { ProductListData } from './data'
import { formatMoney } from '../../../../helpers/formatMoney'
import { ProductListForm } from './Form'

export function ProductList() {
  const productList = ProductListData

  return (
    <div>
      <h2>Nossos cafés</h2>
      <ProductListContainer>
        {productList.map((product) => {
          return (
            <CardContainer key={product.img}>
              <img src={product.img} alt="" />

              <CardTags>
                {product.tags.map((tag) => (
                  <span key={tag}>Tradicional</span>
                ))}
              </CardTags>

              <h3>{product.name}</h3>
              <small>{product.description}</small>

              <footer>
                <label>
                  <span>R$</span>
                  <h3>{formatMoney(product.price)}</h3>
                </label>
                <ProductListForm product={product} />
              </footer>
            </CardContainer>
          )
        })}
      </ProductListContainer>
    </div>
  )
}
