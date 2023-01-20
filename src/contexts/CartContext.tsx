import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { addToCartAction, removeToCartAction } from '../reducers/cart/actions'
import { Cart, CartReducer, Product } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Cart
  addToCart: (product: Product) => void
  removeToCart: (product: Product) => void
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

  const { cart } = cartState

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

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
