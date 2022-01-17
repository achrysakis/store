import CartProduct from "../../models/cartProduct";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cart";

const initialState = {
  products: [],
  total: 0
};

const cartReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_PRODUCT: 
      return addProduct(state, action);
    case REMOVE_PRODUCT:
      return removeProduct(state, action);
    default: 
      return state;
  }
};

const addProduct = (state, action) => {
  const newProducts = state.products;
  const exisitingCartProductIndex = newProducts.findIndex(p => p.product.id === action.product.id);

  if(exisitingCartProductIndex > -1) {
    newProducts[exisitingCartProductIndex].quantity++;
  } else {
    newProducts.push(
      new CartProduct(action.product, 1)      
    );
  }
  return setState({state: state, products:  newProducts});
};

const removeProduct = (state, action) => {
  const newProducts = state.products;
  const exisitingCartProductIndex = newProducts.findIndex(p => p.product.id === action.product.id);  
  if(exisitingCartProductIndex > -1) {
    newProducts.splice(exisitingCartProductIndex, 1);
  } 
  return setState({state: state, products:  newProducts})  
};

const setState = props => {
  const newState =  {
    ...props.state,
    products: props.products,
    total: calculateCartTotal(props.products)    
  }
  return newState;
};

const calculateCartTotal = (products) => {
  let total = 0;
  products.map(p => {
    total = total + (p.product.price * p.quantity);
  });
  return total;
}

export default cartReducer;