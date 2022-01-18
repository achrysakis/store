export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const EMPTY_CART = 'EMPTY_CART'

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product: product
  }
};

export const removeProduct = product => {
  return {
    type: REMOVE_PRODUCT,
    product: product
  }
};

export const changeQuantity = (product, increment) => {
  return {
    type: CHANGE_QUANTITY,
    product: product,
    increment: increment
  }
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  }
};