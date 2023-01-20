import { produce } from 'immer'

export interface Product {
  img: string
  tags: string[]
  name: string
  description: string
  price: number
  qty?: number
}

export interface Cart {
  products: Product[]
  totalPrice: number
  totalQty: number
}

export interface CartState {
  cart: Cart
}

export interface CartActionType {
  type: 'add' | 'remove'
  payload: {
    product: Product
  }
}

export function CartReducer(state: CartState, action: CartActionType) {
  function calc(products: Product[]) {
    let totalPrice = 0
    let totalQty = 0

    products.forEach((product) => {
      totalPrice += product.price * (product.qty ?? 1)
      totalQty += product.qty ?? 1
    })

    return { totalPrice, totalQty }
  }

  switch (action.type) {
    case 'add':
      return produce(state, (draft) => {
        const indexProduct = draft.cart.products.findIndex(
          (productOnCart) => productOnCart.img === action.payload.product.img,
        )

        if (indexProduct >= 0) {
          draft.cart.products[indexProduct].qty =
            (draft.cart.products[indexProduct].qty ?? 1) +
            (action.payload.product.qty ?? 1)
        } else {
          draft.cart.products.push(action.payload.product)
        }

        draft.cart = {
          ...draft.cart,
          ...calc(draft.cart.products),
        }
      })
    case 'remove':
      return produce(state, (draft) => {
        draft.cart.products = draft.cart.products.filter(
          (productOnCart) => productOnCart.img !== action.payload.product.img,
        )
        draft.cart = {
          ...draft.cart,
          ...calc(draft.cart.products),
        }
      })
    default:
      return state
  }
}
