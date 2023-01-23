import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addOrderAction,
  addToCartAction,
  removeToCartAction,
  updateProductOnCartAction,
} from '../reducers/cart/actions'
import { Cart, CartReducer, Order, Product } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Cart
  order?: Order
  addToCart: (product: Product) => void
  updateProductOnCart: (product: Product) => void
  removeToCart: (product: Product) => void
  addOrder: (order: Order) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {
  const storageName = '@coffee-delivery:cart-state-1.0.0'
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: {
        products: [],
        totalPrice: 0,
        totalQty: 0,
      },
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(storageName)
      if (storageStateAsJSON) return JSON.parse(storageStateAsJSON)

      return initialState
    },
  )

  const { cart, order } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(storageName, stateJSON)
  }, [cartState])

  function addToCart(product: Product) {
    dispatch(addToCartAction(product))
  }

  function removeToCart(product: Product) {
    dispatch(removeToCartAction(product))
  }

  function updateProductOnCart(product: Product) {
    dispatch(updateProductOnCartAction(product))
  }

  function addOrder(order: Order) {
    dispatch(addOrderAction(order))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        order,
        addToCart,
        updateProductOnCart,
        removeToCart,
        addOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
