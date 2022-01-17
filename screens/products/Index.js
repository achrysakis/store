import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../components/products/ListItem';
import * as cartActions from '../../store/actions/cart'

const ProductsIndex = props => {
  const products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();

  return (
    <FlatList 
      numColumns={1} 
      data={products} 
      renderItem={
        ({ item }) => (
          <ListItem 
            product={item} 
            onAddToCart={() => {
              dispatch(cartActions.addProduct(item));
            }}
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