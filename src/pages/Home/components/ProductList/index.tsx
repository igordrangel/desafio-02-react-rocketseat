import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContainer, CardTags, ProductListContainer } from './styles'
import { Button } from '../../../../components/Button'
import { ShoppingCart } from 'phosphor-react'
import { NumberInput } from '../../../../components/InputNumber'
import { useForm } from 'react-hook-form'
import { ProductListData } from './data'

const CartItemSchema = zod.object({
  qty: zod.number().min(1),
})

type CartItemFormData = zod.infer<typeof CartItemSchema>

export function ProductList() {
  const productList = ProductListData
  const { register, handleSubmit } = useForm<CartItemFormData>({
    resolver: zodResolver(CartItemSchema),
    defaultValues: {
      qty: 1,
    },
  })

  function putOnCart(data: CartItemFormData) {
    console.log(data)
  }

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
                  <h3>{product.price}</h3>
                </label>
                <form
                  onSubmit={handleSubmit((data) =>
                    putOnCart({ ...data, ...product }),
                  )}
                >
                  <NumberInput {...register('qty', { valueAsNumber: true })} />

                  <Button type="submit" color="default" size="small">
                    <ShoppingCart size={24} weight="fill" />
                  </Button>
                </form>
              </footer>
            </CardContainer>
          )
        })}
      </ProductListContainer>
    </div>
  )
}
