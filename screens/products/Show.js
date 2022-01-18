import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Styles from '../../assets/styles/Styles';
import ImageComponent from '../../components/various/ImageComponent';
import ButtonComponent from '../../components/various/ButtonComponent';
import i18n from 'i18n-js';
import * as cartActions from '../../store/actions/cart'


const ProductsShow = props => {
  const { productId } = props.route.params;
  const products = useSelector(state => state.products.allProducts);
  const product = products.find(product => product.id === productId);
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({ 
      title: product.title
    });
  }, [product]);

  return (
    <ScrollView>
      <ImageComponent 
        source={{uri: product.imageUrl}} 
        style={{height: 400}} 
      />
      <View style={Styles.container}> 
        <ButtonComponent 
          title={ i18n.t("add_to_cart_with_price", {price: product.price.toFixed(2).toString()} )} 
          onPress={() => {
            dispatch(cartActions.addProduct(product))
          }} 
        />
      </View>
      <View style={Styles.container}>
        <View style={Styles.center}>
          <Text style={Styles.h2}>{product.title}</Text>
        </View>
        <View>
          <Text>{product.description}</Text>
        </View>    
      </View>  
    </ScrollView>

  );
}
export default ProductsShow;