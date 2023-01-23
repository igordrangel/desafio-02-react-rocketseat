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

export interface Order extends Cart {
  zipCode: number
  street: string
  streetNumber?: number
  streetComplement?: string
  district: string
  city: string
  state: string
  paymentType: string
}

export interface CartState {
  cart: Cart
  order?: Order
}

export interface CartActionType {
  type: 'add' | 'update' | 'remove' | 'addOrder'
  payload: {
    product?: Product
    order?: Order
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
          (productOnCart) => productOnCart.img === action.payload.product?.img,
        )

        if (indexProduct >= 0) {
          draft.cart.products[indexProduct].qty =
            (draft.cart.products[indexProduct].qty ?? 1) +
            (action.payload.product?.qty ?? 1)
        } else if (action.payload.product) {
          draft.cart.products.push(action.payload.product)
        }

        draft.cart = {
          ...draft.cart,
          ...calc(draft.cart.products),
        }
      })
    case 'update':
      return produce(state, (draft) => {
        const indexProduct = draft.cart.products.findIndex(
          (productOnCart) => productOnCart.img === action.payload.product?.img,
        )

        if (indexProduct >= 0 && action.payload.product) {
          draft.cart.products[indexProduct] = action.payload.product
        }

        draft.cart = {
          ...draft.cart,
          ...calc(draft.cart.products),
        }
      })
    case 'remove':
      return produce(state, (draft) => {
        draft.cart.products = draft.cart.products.filter(
          (productOnCart) => productOnCart.img !== action.payload.product?.img,
        )
        draft.cart = {
          ...draft.cart,
          ...calc(draft.cart.products),
        }
      })
    case 'addOrder':
      return produce(state, (draft) => {
        draft.cart.products = draft.cart.products.filter(
          (productOnCart) => productOnCart.img !== action.payload.product?.img,
        )
        draft.cart = {
          products: [],
          totalPrice: 0,
          totalQty: 0,
        }
        draft.order = action.payload.order
      })
    default:
      return state
  }
}
