import React from 'react';
import { FlatList, Text, View } from 'react-native';
import AppStyles from '../../assets/styles/App.scss';
import { useSelector } from 'react-redux';

const ProductsIndex = () => {
  const products = useSelector(state => state.products.allProducts);
  console.log(products)
  return (
    <View>
      <Text>Hello</Text>
    <FlatList 
      data={products} 
      renderItem={itemData => <Text>{itemData.item.title}</Text>} 
      />
    </View>
  );
}
export default ProductsIndex;