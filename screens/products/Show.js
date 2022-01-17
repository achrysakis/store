import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Styles from '../../assets/styles/Styles';
import ImageComponent from '../../components/various/ImageComponent';
import ButtonComponent from '../../components/various/ButtonComponent';

const ProductsShow = props => {
  const { productId } = props.route.params;
  const products = useSelector(state => state.products.allProducts);
  const product = products.find(p => p.id === productId);

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
        <ButtonComponent title="To cart" onPress={props.onAddToCart} />
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