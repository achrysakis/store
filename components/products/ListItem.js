import React from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import Styles from '../../assets/styles/Styles';
import Variables from '../../assets/styles/Variables';
import ImageComponent from '../various/ImageComponent';
import ButtonComponent from '../various/ButtonComponent';


const ListItem = props => {
  return (
      <View style={Styles.productListItem}>
        <TouchableOpacity onPress={props.onViewDetail}>
          <ImageComponent 
            source={{uri: props.product.imageUrl}} 
            style={Styles.imageContainerWithRadius} 
          />
          <View style={Styles.productListItemContent}>
            <Text style={Styles.h2}>{props.product.title}</Text>
            <Text style={Styles.h4}>${props.product.price.toFixed(2)}</Text>
          </View>
          <View style={Styles.productListItemActions}>
            <ButtonComponent title="View details" onPress={props.onViewDetail} />
            <ButtonComponent title="To cart" onPress={props.onAddToCart} />
          </View>
        </TouchableOpacity>
      </View>

  );
}
export default ListItem;