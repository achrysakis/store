import React from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import Styles from '../../assets/styles/Styles';
import ImageComponent from '../various/ImageComponent';
import ButtonComponent from '../various/ButtonComponent';
import i18n from 'i18n-js';

const ListItem = props => {
  return (
      <View style={Styles.productListItemSmall}>
        <ImageComponent 
          source={{uri: props.product.imageUrl}} 
          style={Styles.imageContainerWithRadius} 
        />
        <View style={Styles.productListItemContent}>
          <Text style={Styles.h2}>{props.product.title}</Text>
          <Text style={Styles.h4}>${props.product.price.toFixed(2)}</Text>
        </View>
        <View style={Styles.productListItemActions}>
          <ButtonComponent title={i18n.t("view_details")} onPress={props.onViewDetail} />
          <ButtonComponent title={i18n.t("add_to_cart")} onPress={props.onAddToCart} />
        </View>
      </View>

  );
}
export default ListItem;