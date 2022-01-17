import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../../components/products/ListItem';

const ProductsIndex = props => {
  const products = useSelector(state => state.products.allProducts);

  return (
    <FlatList 
      numColumns={1} 
      data={products} 
      renderItem={
        ({ item }) => (
          <ListItem 
            product={item} 
            onViewDetail={() => {               
              props.navigation.navigate('ProductsShow', {
                productId: item.id
              });
            }}
          />    
        )}
    />
  );
}
export default ProductsIndex;