import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const CartShow = props => {
  const cartProducts = useSelector(state => state.cart.products);

  return (
    cartProducts.map(cartProduct => <Text>{cartProduct.product.title}</Text>)
  );
}
export default CartShow;