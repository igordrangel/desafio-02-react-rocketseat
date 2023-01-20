import { CartActionType, Product } from './reducer'

export function addToCartAction(product: Product): CartActionType {
  return {
    type: 'add',
    payload: {
      product,
    },
  }
}

export function removeToCartAction(product: Product): CartActionType {
  return {
    type: 'remove',
    payload: {
      product,
    },
  }
}
