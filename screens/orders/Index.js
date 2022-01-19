import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Styles from '../../assets/styles/Styles';
import ListItem from '../../components/products/ListItem';
import ButtonComponent from '../../components/various/ButtonComponent';

const OrdersIndex = props => {
  const orders = useSelector(state => state.orders.orders);

  console.log(orders)
  const dispatch = useDispatch();

  return (
    <FlatList 
      numColumns={1} 
      data={orders} 
      keyExtractor={(item, index) => item.id}
      renderItem={
        ({ item }) => (
          <Text>{item.totalPrice}</Text>   
        )}
    />
  );
}
export default OrdersIndex;