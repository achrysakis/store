import CartProduct from "../../models/cartProduct";
import { ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_QUANTITY, EMPTY_CART } from "../actions/cart";

const initialState = {
  products: [],
  total_price: 0,
  total_products: 0
};

const cartReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_PRODUCT: 
      return addProduct(state, action);
    case REMOVE_PRODUCT:
      return removeProduct(state, action);
    case CHANGE_QUANTITY:
      return changeQuanity(state, action);
    case EMPTY_CART:
      return emptyCart();
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

const emptyCart = () => {
  return initialState; 
};

const changeQuanity = (state, action) => {
  const newProducts = state.products;
  const exisitingCartProductIndex = newProducts.findIndex(p => p.product.id === action.product.id);  
  if(exisitingCartProductIndex > -1) {
    if(action.increment==true) {
      newProducts[exisitingCartProductIndex].quantity++;
    } else {
      newProducts[exisitingCartProductIndex].quantity--;
      if(newProducts[exisitingCartProductIndex].quantity < 1) {
        newProducts.splice(exisitingCartProductIndex, 1);
      }
    }
  } 
  return setState({state: state, products:  newProducts})  
};

const setState = props => {
  const newState =  {
    ...props.state,
    products: props.products,
    total_price: calculateCartTotalPrice(props.products),
    total_products: calculateCartTotalProducts(props.products)

  }
  return newState;
};

const calculateCartTotalPrice = (products) => {
  let total = 0;
  products.map(p => {
    total = total + (p.product.price * p.quantity);
  });
  return total;
}

const calculateCartTotalProducts = (products) => {
  let total = 0;
  products.map(p => {
    total = total + p.quantity;
  });
  return total;
}

export default cartReducer;