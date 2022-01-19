import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Styles from '../../assets/styles/Styles';
import ListItem from '../../components/products/ListItem';
import ButtonComponent from '../../components/various/ButtonComponent';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders';


const CartShow = props => {
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const cartTotalPrice = useSelector(state => state.cart.total_price);
  const dispatch = useDispatch();

  const placeOrder = () => {
    dispatch(orderActions.createOrder(cartProducts, cartTotalPrice));
    dispatch(cartActions.emptyCart());
    props.navigation.navigate("OrdersIndex");  
  }

  return (
    <View>
      <View style={{...Styles.container,...Styles.center,...Styles.orderNow}}>
        <Text style={Styles.h2}>Total: {cartTotalPrice}</Text>
        {cartProducts.length ? 
        <ButtonComponent 
          title="Order now" 
          onPress={() => 
            placeOrder()
          } 
        />
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