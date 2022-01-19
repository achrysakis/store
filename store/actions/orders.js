export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (cartProducts, totalPrice, date = new Date().toString()) => {
  return {
    type: CREATE_ORDER,
    cartProducts: cartProducts,
    totalPrice: totalPrice,
    date: date
  }
};