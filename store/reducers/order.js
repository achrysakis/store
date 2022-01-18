import Order from "../../models/order";
import { CREATE_ORDER } from "../actions/order";

const initialState = {
  allOrders: []
};

const orderReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case CREATE_ORDER: 
      return createOrder(state, action);
    default: 
      return state;
  }
};

const createOrder = (state, action) => {
  const orders = state.allOrders;
  orders.push(new Order(action.cartProducts, action.totalPrice, action.date));  

  return orders;
};

export default orderReducer;