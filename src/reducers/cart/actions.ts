import { CartActionType, Order, Product } from './reducer'

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

export function updateProductOnCartAction(product: Product): CartActionType {
  return {
    type: 'update',
    payload: {
      product,
    },
  }
}

export function addOrderAction(order: Order): CartActionType {
  return {
    type: 'addOrder',
    payload: {
      order,
    },
  }
}
