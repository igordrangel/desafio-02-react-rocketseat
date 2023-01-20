import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Product } from '../../../../../reducers/cart/reducer'
import { NumberInput } from '../../../../../components/InputNumber'
import { Button } from '../../../../../components/Button'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'

const CartItemSchema = zod.object({
  qty: zod.number().min(1),
})

type CartItemFormData = zod.infer<typeof CartItemSchema>

interface ProductListFormProps {
  product: Product
}

export function ProductListForm({ product }: ProductListFormProps) {
  const { addToCart } = useContext(CartContext)
  const { register, handleSubmit } = useForm<CartItemFormData>({
    resolver: zodResolver(CartItemSchema),
    defaultValues: {
      qty: 1,
    },
  })

  function putOnCart(data: Product) {
    addToCart(data)
  }

  return (
    <form
      onSubmit={handleSubmit((data) =>
        putOnCart({
          ...product,
          ...data,
        }),
      )}
    >
      <NumberInput {...register('qty', { valueAsNumber: true })} />

      <Button type="submit" color="default" size="small">
        <ShoppingCart size={24} weight="fill" />
      </Button>
    </form>
  )
}
