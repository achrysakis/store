import { PRODUCTS } from '../../data/products';

const initialState = {
  allProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.userId === 'c1')
};

const productsReducer = ( state = initialState, action ) => {
  return state;
};

export default productsReducer;