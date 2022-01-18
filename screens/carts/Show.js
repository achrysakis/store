import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { Button } from 'react-native-web';
import { useSelector, useDispatch } from 'react-redux';
import Styles from '../../assets/styles/Styles';
import ListItem from '../../components/products/ListItem';
import ButtonComponent from '../../components/various/ButtonComponent';
import * as cartActions from '../../store/actions/cart'

const CartShow = props => {
  const cartProducts = useSelector(state => state.cart.products);
  const cartTotalPrice = useSelector(state => state.cart.total_price);
  const dispatch = useDispatch();

  return (
    <View>
      <View style={{...Styles.container,...Styles.center,...Styles.orderNow}}>
        <Text style={Styles.h2}>Total: {cartTotalPrice.toFixed(2)}</Text>
        {cartProducts.length ? 
        <ButtonComponent title="Order now" />
        : null}
      </View>

    <FlatList 
      numColumns={1} 
      data={cartProducts} 
      keyExtractor={(item, index) => item.product.id}
      renderItem={
        
        ({ item }) => (
          <ListItem
            product={item.product} 
            quantity={item.quantity}
            onChangeQuantityUp={() => {
              dispatch(cartActions.changeQuantity(item.product, true))
            }}
            onChangeQuantityDown={() => {
              dispatch(cartActions.changeQuantity(item.product, false))
            }}            
            onRemoveFromCart={() => {
              dispatch(cartActions.removeProduct(item.product));
            }}
          />    
        )}
    />
    </View>

  );
}
export default CartShow;