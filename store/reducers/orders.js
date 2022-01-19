import Order from "../../models/order";
import { CREATE_ORDER } from "../actions/orders";
import uuid from 'react-native-uuid';

const initialState = {
  orders: []
};

const ordersReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case CREATE_ORDER: 
      return createOrder(state, action);
    default: 
      return state;
  }
};

const createOrder = (state, action) => {   
  const newOrder = 
    new Order(
      uuid.v4(),
      action.cartProducts, 
      action.totalPrice, 
      action.date
    );
  return {...state, orders: state.orders.concat(newOrder)};
};

export default ordersReducer;