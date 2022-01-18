export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (cartProducts, totalPrice) => {
  return {
    type: CREATE_ORDER,
    cartProducts: cartProducts,
    totalPrice: totalPrice,
    date: Date.now()
  }
};